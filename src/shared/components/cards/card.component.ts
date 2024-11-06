import { Component, Input } from '@angular/core';
import { LandigFeatures } from 'src/shared/types/landing-features.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="min-w-[260px] max-w-[260px] min-h-72  pt-7 pb-5 px-5 border  ">
      <div class="flex flex-col gap-1">
        <section
          class="bg-indigo-800 text-sm text-white font-bold flex justify-center items-center w-6 h-6 "
        >
          {{ landigFeatures.id }}
        </section>
        <section class="text-lg font-semibold">
          {{ landigFeatures.title }}
        </section>
        <section class="text-sm font-light text-wrap">
          {{ landigFeatures.body }}
        </section>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input({
    required: true,
  })
  landigFeatures: LandigFeatures = {
    id: 0,
    title: '',
    body: '',
  };
}
