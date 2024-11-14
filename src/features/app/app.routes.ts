import { Routes } from '@angular/router';
import { BusinessComponent } from '../business/business.component';

import { BusinessLoginComponent } from '../business/business-login/business-login.component';
import { landingComponent } from '../landing/landing.component';
import { EmployeeComponent } from '../business/employee/employee.component';
import { AppointmentComponent } from '../business/appointment/appointment.component';
import { ServiceProfileComponent } from '../business/service-profile/service-profile.component';
import { CustomerLoginComponent } from '../customer/customer-login/customer-login.component';
import { CustomerComponent } from '../customer/customer/customer.component';

export const routes: Routes = [
  // {
  //   path: 'landing',
  //   component: landingComponent,
  // },
  {
    path: '',
    component: landingComponent,
  },
  // {
  //   path: '',

  //   component: CustomerComponent,
  // },
  {
    path: 'business',
    component: BusinessComponent,
    children: [
      {
        path: 'employees',
        component: EmployeeComponent,
      },
      {
        path: 'appointment',
        component: AppointmentComponent,
      },
      {
        path: 'service-profile',
        component: ServiceProfileComponent,
      },
    ],
  },
  { path: 'business/login', component: BusinessLoginComponent },
  { path: 'customer/login', component: CustomerLoginComponent },
];
