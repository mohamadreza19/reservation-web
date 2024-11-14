import { Component } from '@angular/core';
import {} from '@ng-icons/font-awesome';
import { ContainerComponent } from '../../containers/container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-master-header',
  standalone: true,
  imports: [ContainerComponent, RouterLink],
  template: `
    <header class="flex justify-between border-b border-black mx-auto ">
      <a routerLink="/">
        <img
          class="max-w-32 ms-5 h-[50px] max-h-[50px] relative bottom-1 cursor-pointer"
          src="/assets/svgs/svgexport-30.svg"
        />
      </a>
      <button class="text-lg px-5 py-[10px] bg-black text-white ">
        ارتباط
      </button>
    </header>
  `,
})
export class MasterHeaderComponent {}
