import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [IconsModule, NgClass],
  template: `<div
    [ngClass]="{}"
    #container
    class="hidden opacity-0   fixed w-full h-screen right-0 top-0 z-50   items-center justify-center bg-slate-50 bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity delay-300"
  >
    <div
      class="absolute w-[90%] min-h-16 border-2 border-black rounded-sm shadow-sm p-6 backdrop-blur-xl"
    >
      <!-- بخش عنوان با دکمه بستن -->
      <section class="flex justify-between border-b-2 border-black pb-3">
        <p class="text-2xl font-bold">تایید وقت</p>
        <span (click)="handleClose()">
          <ng-icon name="matCloseOutline" size="34" class="cursor-pointer" />
        </span>
      </section>

      <!-- اطلاعات قرار ملاقات -->
      <section class="pt-5">
        <div class="flex flex-col space-y-3">
          <!-- تاریخ قرار ملاقات -->
          <div class="flex justify-between">
            <span class="font-bold">تاریخ:</span>
            <span>۱۴۰۲/۰۹/۲۳</span>
          </div>

          <!-- زمان قرار ملاقات -->
          <div class="flex justify-between">
            <span class="font-bold">زمان:</span>
            <span>۱۵:۳۰</span>
          </div>

          <!-- مکان قرار ملاقات -->
          <div class="flex justify-between">
            <span class="font-bold">مکان:</span>
            <span>کلینیک درمانی تهران</span>
          </div>

          <!-- نام پزشک -->
          <div class="flex justify-between">
            <span class="font-bold">پزشک:</span>
            <span>دکتر مهدی احمدی</span>
          </div>

          <!-- نوع ویزیت -->
          <div class="flex justify-between">
            <span class="font-bold">نوع ویزیت:</span>
            <span>ویزیت حضوری</span>
          </div>
        </div>
      </section>

      <!-- دکمه تایید به صورت outline -->
      <section class="pt-6 flex justify-center">
        <button
          class="px-8 py-2 border-2 border-black text-black font-semibold rounded-sm hover:bg-black hover:text-white transition duration-150"
        >
          تایید
        </button>
      </section>
    </div>
  </div> `,
})
export class ConfirmModalComponent implements OnChanges {
  @Input()
  isOpen!: boolean;

  @Output()
  handleModalStatus: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('container')
  container!: ElementRef<HTMLElement>;

  timeoutId!: any;

  handleClose() {
    this.handleModalStatus.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { isOpen } = changes;
    const container = this.container;
    if (!container) return;

    if (isOpen.currentValue) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      container.nativeElement.classList.add('!flex');

      this.timeoutId = setTimeout(() => {
        container.nativeElement.classList.add('!opacity-100');
      }, 300);
    } else {
      container.nativeElement.classList.remove('!flex');
      container.nativeElement.classList.remove('!opacity-100');
    }
  }
}
