import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ListInputComponent } from './list-input.component';
import { InputStatus } from './types/input-status.inteface';
import { EmitChangeValue } from './types/emit-change-value.interface';
import { BusinessTimeSlotService } from 'src/features/business/business-timeslot.service';
import { NgClass } from '@angular/common';
import { DatePick } from 'src/shared/types/date-pick.interface';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [ListInputComponent, NgClass],
  // providers: [BusinessTimeSlotService],
  template: `<div
    [ngClass]="{
    'justify-start':direction=='start',
    'justify-center':direction=='center',
    'justify-end':direction=='end',
  }"
    class=" h-10 flex items-center bg-indigo-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border border-gray-100 font-bold shadow-lg  "
  >
    <app-list-input
      [direction]="'right'"
      [list]="days"
      [value]="state.day"
      (statusChange)="handleInputsAppearance($event)"
      (valueChange)="handleChangeInputValue($event)"
      [isListOpen]="isDayPicking"
    />
    <app-list-input
      [direction]="'center'"
      [list]="months"
      [value]="state.month"
      (statusChange)="handleInputsAppearance($event)"
      (valueChange)="handleChangeInputValue($event)"
      [isListOpen]="isMonthPicking"
    />
    <app-list-input
      [direction]="'left'"
      [list]="years"
      [value]="state.year"
      (statusChange)="handleInputsAppearance($event)"
      (valueChange)="handleChangeInputValue($event)"
      [isListOpen]="isYearPicking"
    />
  </div>`,
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent {
  days = ['1', '2', '3', '5', '6', '7', '8', '9', '10'];
  months = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  years = ['1403', '1402', '1404'];

  @Input()
  direction: 'end' | 'center' | 'start' = 'start';

  @Input()
  isDayPicking: boolean = false;
  @Input()
  isMonthPicking: boolean = false;
  @Input()
  isYearPicking: boolean = false;

  @Input()
  state = {
    day: '6',
    month: 'بهمن',
    year: '1403',
  };

  @Output()
  changeDate: EventEmitter<DatePick> = new EventEmitter<DatePick>();

  timeoutId: any;

  // Receive the container element from the parent

  constructor(
    private elRef: ElementRef,
    private businessTimeSlotService: BusinessTimeSlotService
  ) {}
  handleInputsAppearance(val: InputStatus) {
    if (val.status === 'closed') {
      this.isDayPicking = false;
      this.isMonthPicking = false;
      this.isYearPicking = false;
      this.businessTimeSlotService.setDatePickerHover(false);
    }
    switch (val.type) {
      case 'right':
        if (val.status === 'open') {
          this.isDayPicking = true;
          this.isMonthPicking = false;
          this.isYearPicking = false;
          this.businessTimeSlotService.setDatePickerHover(true);
        }
        break;
      case 'center':
        if (val.status === 'open') {
          this.isMonthPicking = true;
          this.isDayPicking = false;
          this.isYearPicking = false;
          this.businessTimeSlotService.setDatePickerHover(true);
        }
        break;
      case 'left':
        if (val.status === 'open') {
          this.isYearPicking = true;
          this.isDayPicking = false;
          this.isMonthPicking = false;
          this.businessTimeSlotService.setDatePickerHover(true);
        }
        break;
    }
  }
  handleChangeInputValue(data: EmitChangeValue) {
    switch (data.type) {
      case 'right':
        this.state.day = data.value;
        break;
      case 'center':
        this.state.month = data.value;
        break;
      case 'left':
        this.state.year = data.value;
        break;
    }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.handleDateChange();
    }, 300);
  }

  handleDateChange() {
    const date: DatePick = {
      day: Number(this.state.day),
      mouth: 10,
      year: Number(this.state.year),
    };

    this.changeDate.emit(date);
  }
}
