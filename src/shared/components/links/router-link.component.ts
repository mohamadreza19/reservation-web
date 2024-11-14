import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-router-link',
  template: `
    <a
      class="block ps-2 py-2 transition-colors duration-300 hover:bg-indigo-700 border-2 border-transparent hover:border-s-white hover:text-white cursor-pointer text-base font-normal"
      [routerLink]="to"
      routerLinkActive=" bg-indigo-400 text-white "
      [routerLinkActiveOptions]="{ exact: true }"
    >
      <ng-content />
    </a>
  `,
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
})
export class RouterLinkComponent {
  @Input()
  to!: string;
}
