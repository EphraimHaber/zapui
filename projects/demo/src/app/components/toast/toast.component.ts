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
  title = 'Schedule a meeting';
  text = 'Friday, February 10, 2023 at 5:57 PM';
  action = 'Undo';
  showToast() {
    this.show = true;
  }
}
