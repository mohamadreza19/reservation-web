import { Component, Input } from '@angular/core';
import {} from '@ng-icons/font-awesome';
import { MasterHeaderComponent } from './master-header/master-header.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MasterHeaderComponent, NgClass],
  template: `
    <div>
      <app-master-header />
      <div
        [ngClass]="{
          'pt-12': isPaddingless === false
        }"
        class="pt-12"
      >
        <ng-content />
      </div>
    </div>
  `,
})
export class Layout1Component {
  @Input({
    required: true,
  })
  isPaddingless: boolean = true; //
}
