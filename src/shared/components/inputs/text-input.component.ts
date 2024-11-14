import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [NgClass],
  template: ` <input
    class="w-full  rounded-sm border px-3"
    [ngClass]="{
      'h-14': size === 'medium',
      '!h-[66px] text-2xl tracking-wider': size === 'big'
    }"
    placeholder="09032446913"
  />`,
})
export class TextInputComponent {
  @Input()
  size: 'medium' | 'big' = 'medium';
}
