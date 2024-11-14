import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import {
  faSolidArrowLeft,
  faSolidBars,
  faSolidCheck,
  faSolidCheckDouble,
  faSolidEye,
  faSolidPersonBreastfeeding,
  faSolidScissors,
  faSolidSortDown,
} from '@ng-icons/font-awesome/solid';

import {
  matArrowBackIosNewOutline,
  matCloseOutline,
} from '@ng-icons/material-icons/outline';

@NgModule({
  imports: [
    NgIconsModule.withIcons({
      faSolidScissors,
      faSolidArrowLeft,
      faSolidCheck,
      faSolidCheckDouble,
      faSolidPersonBreastfeeding,
      faSolidEye,
      faSolidBars,
      faSolidSortDown,
      //
      matArrowBackIosNewOutline,
      matCloseOutline,
    }),
  ],
  exports: [NgIconsModule],
})
export class IconsModule {}
