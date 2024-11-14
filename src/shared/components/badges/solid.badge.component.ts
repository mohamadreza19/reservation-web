import { Component } from '@angular/core';

@Component({
  selector: 'app-solid-badge',
  standalone: true,
  imports: [],
  template: `
    <div class="text-xs font-normal text-white px-2 py-1 bg-indigo-800">
      <ng-content />
    </div>
  `,
})
export class SolidBadgeComponent {}
