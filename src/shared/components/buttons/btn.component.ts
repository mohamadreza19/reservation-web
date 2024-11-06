import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {} from '@ng-icons/font-awesome';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      class="w-full md:min-w-[366px]  px-7 py-4 border text-2xl "
      [ngClass]="{
        'bg-white border-black text-black': type === 'solid',
        'bg-black border-blacks text-white': type === 'outline'
      }"
    >
      <ng-content />
    </button>
  `,
})
export class BtnComponent {
  @Input() type: 'solid' | 'outline' = 'solid';
}
