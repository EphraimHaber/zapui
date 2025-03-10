import {
  Injectable,
  ComponentRef,
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
  signal,
  computed,
  DestroyRef,
  inject,
} from '@angular/core';

import { ZapToast } from './toast.component';
import { ZapToastInterface } from './toast.interface';

type ToastPosition = 'top' | 'bottom';

const TOAST_STYLES = {
  base: {
    position: 'fixed',
    zIndex: '9999',
    transition: 'all 0.3s ease-in-out',
  },
  positions: {
    top: {
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: 'auto',
    },
    bottom: {
      top: 'auto',
      left: 'auto',
      bottom: '20px',
      right: '20px',
    },
  },
} as const;

@Injectable({ providedIn: 'root' })
export class ZapToastService {
  private readonly TOAST_DURATION = 5000;
  private lastToastTime = signal<number>(0);
  private activeToastRef = signal<ComponentRef<ZapToast> | null>(null);
  private readonly destroyRef = inject(DestroyRef);

  private isQuickSuccession = computed(
    () => Date.now() - this.lastToastTime() < this.TOAST_DURATION
  );

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  private createToast(config: ZapToastInterface) {
    const toastComponentRef = createComponent(ZapToast, {
      environmentInjector: this.injector,
    });

    Object.assign(toastComponentRef.instance, config);
    toastComponentRef.changeDetectorRef.detectChanges();

    const element = toastComponentRef.location.nativeElement;
    document.body.appendChild(element);
    this.appRef.attachView(toastComponentRef.hostView);

    this.applyStyles(element);
    const cleanup = this.setupPositionHandling(element);

    this.destroyRef.onDestroy(() => {
      cleanup();
      this.dismissImmediately(toastComponentRef);
    });

    toastComponentRef.instance.dismiss.subscribe(() => {
      cleanup();
      this.hide(toastComponentRef);
    });

    setTimeout(() => {
      cleanup();
      this.hide(toastComponentRef);
    }, this.TOAST_DURATION);

    this.activeToastRef.set(toastComponentRef);
  }

  private applyStyles(element: HTMLElement): void {
    Object.assign(element.style, TOAST_STYLES.base, {
      opacity: '0',
      transform: 'translateY(-100%)',
    });
  }

  private setupPositionHandling(element: HTMLElement): () => void {
    const updatePosition = () => {
      const position: ToastPosition =
        window.innerWidth < 640 ? 'top' : 'bottom';
      Object.assign(element.style, TOAST_STYLES.positions[position]);

      element.style.transform =
        element.style.opacity === '0'
          ? `translateY(${position === 'top' ? '-100%' : '100%'})`
          : 'translateY(0)';
    };

    updatePosition();
    window.addEventListener('resize', updatePosition, { passive: true });

    requestAnimationFrame(() => {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    });

    return () => window.removeEventListener('resize', updatePosition);
  }

  private dismissImmediately(toastRef: ComponentRef<ZapToast>) {
    if (!toastRef || !toastRef.location) return;
    toastRef.destroy();
    this.activeToastRef.set(null);
  }

  private hide(toastRef: ComponentRef<ZapToast>) {
    if (!toastRef || !toastRef.location) return;

    const element = toastRef.location.nativeElement;
    element.style.transform = 'translateX(100%)';
    element.style.opacity = '0';

    setTimeout(() => {
      toastRef.destroy();
      this.activeToastRef.set(null);
    }, 300);
  }

  dismiss() {
    if (this.activeToastRef()) {
      this.hide(this.activeToastRef()!);
    }
  }

  show(config: ZapToastInterface) {
    try {
      if (this.activeToastRef()) {
        if (this.isQuickSuccession()) {
          this.dismissImmediately(this.activeToastRef()!);
        } else {
          this.hide(this.activeToastRef()!);
        }
      }

      this.lastToastTime.set(Date.now());
      this.createToast(config);
    } catch (error) {
      console.error('Failed to show toast:', error);
    }
  }
}
