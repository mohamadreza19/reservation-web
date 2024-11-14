import { Component, Input } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [IconsModule, NgFor],
  template: ` <ol class="flex items-center w-full px-2">
    <li *ngFor="let step of steps" [class]="step.class">
      <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-14 lg:w-14 dark:bg-indigo-700 shrink-0"
      >
        <p class="text-white font-light">{{ step.text }}</p>
      </span>
    </li>
    <!-- <li
      class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
      <span
        class="flex flex-col items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-14 lg:w-14 dark:bg-indigo-800 shrink-0"
      >
        <ng-icon name="faSolidCheck" color="white" class="!w-9 !h-9" />
        <p class="text-[10px] text-white font-light">خدمات</p>
      </span>
    </li>
    <li class="flex w-fit items-center">
      <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-14 lg:w-14 dark:bg-indigo-800 shrink-0"
      >
        <p class="text-white font-light">خدمات</p>
      </span>
    </li> -->
  </ol>`,
})
export class StepperComponent {
  @Input()
  steps = [
    {
      text: 'خدمات',
      class:
        "flex w-full items-center text-indigo-800 dark:text-indigo-800 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-indigo-700",
    },
    {
      text: 'تاریخ',
      class:
        "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-indigo-700 after:border-4 after:inline-block dark:after:border-indigo-700",
    },
    {
      text: 'تایید',
      class: 'flex w-fit items-center',
    },
  ];
}
