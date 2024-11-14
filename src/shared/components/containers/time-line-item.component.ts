import { Component, Input } from '@angular/core';
import { TimeSlotComponent } from '../cards/time-slot/time-slot.card.component';
import { TimeSlot } from 'src/shared/types/time-slot.interface';
import { fakeData } from 'src/features/business/fake-data';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-time-line-item',
  standalone: true,
  imports: [TimeSlotComponent, NgFor, NgClass],
  template: ` <section class="flex gap-x-2 mb-5">
    <article class="flex flex-col justify-between min-h-5 relative text-nowrap">
      <section class="flex items-start gap-x-1">
        <section>
          <div
            class="w-2 h-2 border-2 border-black bg-indigo-700 z-[5] relative"
          ></div>
        </section>
        <section>
          <p class="">
            <span class="text-2xl">21</span>,
            <span class="text-sm">آبان</span>
          </p>
        </section>
      </section>
      <div
        class="border border-black w-0 h-[99%] absolute top-1/2 right-[2px] transform -translate-y-1/2 -translate-x-1/2"
      ></div>
      <section class="flex items-end gap-x-1">
        <section>
          <div
            class="w-2 h-2 border-2 border-black bg-indigo-700 z-[5] relative"
          ></div>
        </section>
        <section>
          <p class="">
            <span class="text-sm">10:00</span>
          </p>
        </section>
      </section>
    </article>
    <article class="flex flex-wrap gap-1 p-2">
      <app-time-slot-card
        *ngFor="let timeSlot of businessTimeSlots"
        [state]="timeSlot"
      />
    </article>
  </section>`,
})
export class TimeLineItemComponent {
  @Input()
  businessTimeSlots: TimeSlot[] = [
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
    ...fakeData,
  ];
}
