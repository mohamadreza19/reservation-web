import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsModule } from 'src/shared/components/icons/icons.module';
import { DatePick } from 'src/shared/types/date-pick.interface';

@Component({
  selector: 'app-date-picked',
  standalone: true,
  imports: [IconsModule],
  template: ` <div class="flex-grow relative bg-neutral-100 drop-shadow-lg">
    @if (onClose.observed) {
    <div class="absolute bg-neutral-100 shadow-md max-h-[28px] cursor-pointer">
      <span class="cursor-pointer" (click)="handleClose()">
        <ng-icon name="matCloseOutline" size="28px" />
      </span>
    </div>
    }
    <section class="p-6 flex items-center justify-center">
      <section class="w-fit px-3 py-1 text-xl rounded-sm">
        {{ state.day }}
      </section>
      <section class="w-fit mx-2 text-xs font-extrabold">/</section>
      <section class="w-fit px-3 py-1 text-xl rounded-sm">
        {{ state.mouth }}
      </section>
      <section class="w-fit mx-2 text-xs font-extrabold">/</section>
      <section class="w-fit px-3 py-1 text-xl rounded-sm">
        {{ state.year }}
      </section>
    </section>
  </div>`,
})
export class DatePickedComponent {
  @Input({ required: true })
  state!: DatePick;

  @Output()
  onClose: EventEmitter<void> = new EventEmitter<void>();

  handleClose() {
    this.onClose.emit();
  }
}
