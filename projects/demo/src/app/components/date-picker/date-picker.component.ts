import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZapDatePicker, ZapDatePickerBreakpoints } from 'zap/forms';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ZapDatePicker],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  datePickerControl = new FormControl(
    {
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      disabled: false,
    },
    []
  );
  datePickerControl2 = new FormControl({ value: '', disabled: false }, []);
  breakpoints: ZapDatePickerBreakpoints = {
    default: {
      maxPerRow: 1,
      monthsPerView: 1,
    },
  };
  breakpoints2: ZapDatePickerBreakpoints = {
    default: {
      maxPerRow: 2,
      monthsPerView: 2,
    },
    lg: {
      maxPerRow: 1,
      monthsPerView: 1,
    },
  };
}
