import { Component } from '@angular/core';
import {} from '@ng-icons/font-awesome';
import { MasterHeaderComponent } from './master-header/master-header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MasterHeaderComponent],
  template: `
    <div>
      <app-master-header />
      <div class="pt-12">
        <ng-content />
      </div>
    </div>
  `,
})
export class Layout1Component {}
