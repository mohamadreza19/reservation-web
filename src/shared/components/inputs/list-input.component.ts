import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [],
  template: `<div>list</div>`,
})
export class ListInputComponent {
  days = ['1', '2', '3'];
  months = ['2', '3', '4'];
  years = ['1403', '1402'];

  state = {
    day: '1',
    month: '1',
    year: '1403',
  };
}
