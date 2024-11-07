import { Routes } from '@angular/router';
import { BusinessComponent } from '../business/business.component';
import { LandigComponent } from '../landig/landig.component';

export const routes: Routes = [
  {
    path: '',
    component: LandigComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
];
