import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BusinessTimeSlotService {
  private _isDatePickerHover = new BehaviorSubject<boolean>(false);
  isDatePickerHover$ = this._isDatePickerHover.asObservable();

  setDatePickerHover(value: boolean): void {
    console.log('biiiiv', value);
    this._isDatePickerHover.next(value);
  }
}
