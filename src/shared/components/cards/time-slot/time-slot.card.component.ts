import { Component, Input } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { BtnComponent } from '../../buttons/btn.component';
import { NgClass } from '@angular/common';
import { TimeSlot } from 'src/shared/types/time-slot.interface';

@Component({
  selector: 'app-time-slot-card',
  standalone: true,
  imports: [IconsModule, BtnComponent, NgClass],
  templateUrl: './time-slot.component.html',
})
export class TimeSlotComponent {
  @Input()
  state!: TimeSlot;
}
