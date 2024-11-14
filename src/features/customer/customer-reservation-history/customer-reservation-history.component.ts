import { Component, Input } from '@angular/core';
import { DatepickerComponent } from '../../../shared/components/datepickers/datepicker/datepicker.component';
import { IconsModule } from 'src/shared/components/icons/icons.module';
import { DatePick } from 'src/shared/types/date-pick.interface';
import { NgIf } from '@angular/common';
import { DatePickedComponent } from './date-picked.component';

@Component({
  selector: 'app-customer-reservation-history',
  standalone: true,
  imports: [DatepickerComponent, IconsModule, NgIf, DatePickedComponent],
  templateUrl: './customer-reservation-history.component.html',
  styleUrl: './customer-reservation-history.component.css',
})
export class CustomerReservationHistoryComponent {
  @Input()
  startDate: DatePick | null = null;
  @Input()
  endDate: DatePick | null = null;

  // @Input()
  // datePickStep=0

  handleChangeStartDate(date: DatePick) {
    console.log(date);
    this.startDate = date;
  }
  handleChangeEndDate(date: DatePick) {
    this.endDate = date;
  }

  handleRemoveStartDate() {
    this.startDate = null;
  }
  handleRemoveEndDate() {
    this.endDate = null;
  }
}
