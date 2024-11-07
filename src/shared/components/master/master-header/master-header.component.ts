import { Component } from '@angular/core';
import {} from '@ng-icons/font-awesome';
import { ContainerComponent } from '../../containers/container.component';

@Component({
  selector: 'app-master-header',
  standalone: true,
  imports: [ContainerComponent],
  template: `
    <header class="flex justify-between border-b border-black mx-auto">
      <img
        class="max-w-32 ms-5 relative bottom-1 cursor-pointer"
        src="/assets/svgs/svgexport-30.svg"
      />
      <button class="text-xl px-5 py-3 bg-black text-white ">ارتباط</button>
    </header>
  `,
})
export class MasterHeaderComponent {}
