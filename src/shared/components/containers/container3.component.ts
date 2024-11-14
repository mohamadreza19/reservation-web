import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-container3',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-6 p-8 border border-black w-full min-h-20 ">
      <header>
        <p class="text-xl font-semibold">{{ header }}</p>

        <p class="text-base font-normal text-neutral-600 mt-1">
          {{ description }}
        </p>
      </header>

      <div class="w-full pt-6">
        <ng-content />
      </div>
    </div>
  `,
})
export class Container3Component {
  @Input() hostClass: string = '';
  @Input()
  header!: string;

  @Input()
  description!: string;

  @HostBinding('class') get applyClass() {
    return this.hostClass;
  }
}
