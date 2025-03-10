import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zap-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ZapToast {
  @Input() title! : string;
  @Input() text! : string;
  @Input() action!: string;
  @Input() shape!: 'pill' | 'flat' | 'curve';
  @Input() zapClass!: string;
  @Input() type: 'error' | 'default' = 'default';

  get classes(): string[] {
    return [
      this.shape,
      this.type,
      this.zapClass
    ].filter((cls) => cls && cls !== 'default');
  }
}
