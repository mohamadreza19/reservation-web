import { Component } from '@angular/core';
import {} from '@ng-icons/font-awesome';
import { ContainerComponent } from '../../containers/container.component';
import { RouterLink } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';
import { Container2Component } from '../../containers/container2.component';

@Component({
  selector: 'app-master-header2',
  standalone: true,
  imports: [ContainerComponent, RouterLink, IconsModule, Container2Component],
  template: `
    <div class="fixed z-50 w-full right-0">
      <app-container2 header="">
        <header
          class="w-full  flex justify-between items-center p-4 bg-white bg-opacity-70 border-b border-gray-300 backdrop-filter backdrop-blur-lg rounded-lg shadow-md"
        >
          <p
            class="text-[50px] !audiowide-regular text-center text-gradient-indigo-800 opacity-30"
          >
            MONA MOHAMADI
            <!-- <span class="font-bold">منا محمدی </span> -->
          </p>
          <div class="flex items-center gap-2">
            <img
              class="rounded-full max-w-7 max-h-7"
              src="/assets/imgs/Profile_avatar_placeholder_large.png"
            />
            <ng-icon name="faSolidBars"></ng-icon>
          </div>
        </header>
      </app-container2>
    </div>
  `,
})
export class MasterHeader2Component {}
