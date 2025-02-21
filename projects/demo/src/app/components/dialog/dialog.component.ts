import { Component } from '@angular/core';
import { ZapButton, ZapDialog, ZapDialogButtonDirective } from 'zap/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ZapDialog, ZapButton, ZapDialogButtonDirective],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {}
