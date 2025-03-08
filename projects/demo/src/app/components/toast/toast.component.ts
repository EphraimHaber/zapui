import { Component } from '@angular/core';
import { ZapButton, ZapToast } from 'zap/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [ZapToast, ZapButton],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  show = false;

  showToast() {
    this.show = true;
  }
}
