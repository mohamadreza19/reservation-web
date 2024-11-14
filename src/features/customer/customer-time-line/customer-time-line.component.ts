import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconsModule } from 'src/shared/components/icons/icons.module';
import { ConfirmModalComponent } from '../../../shared/components/modals/confirm.component';

@Component({
  selector: 'app-customer-time-line',
  standalone: true,
  imports: [NgFor, IconsModule, NgClass, ConfirmModalComponent],
  templateUrl: './customer-time-line.component.html',
  styleUrl: './customer-time-line.component.css',
})
export class CustomerTimeLineComponent {
  @Input()
  time_slots = Array.from({
    length: 4,
  });
  time_slots2 = Array.from({
    length: 10,
  });
  @Input()
  persianDays = ['شنب', 'یکش', 'دوش', 'سه‌ش', 'چه‌ش', 'پن‌ش', 'جمع'];
  @Input()
  persianDaysLength = this.persianDays.length - 1;

  @Input()
  isModalOpen: boolean = false;

  handleModal() {
    console.log('biiiv');
    this.isModalOpen = true;
  }
  handleCloseModal() {
    this.isModalOpen = false;
  }
}
