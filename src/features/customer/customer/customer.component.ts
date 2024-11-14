import { Component, ElementRef, Input } from '@angular/core';
import { MasterHeader2Component } from '../../../shared/components/master/master-header-2/master-header.component';
import { NgFor } from '@angular/common';
import { IconsModule } from 'src/shared/components/icons/icons.module';
import { FormsModule } from '@angular/forms';
import { Container2Component } from '../../../shared/components/containers/container2.component';
import { Container3Component } from '../../../shared/components/containers/container3.component';
import { RouterLinkComponent } from '../../../shared/components/links/router-link.component';
import { PageLinks } from 'src/shared/constants/page-links.enum';
import { DropDownComponent } from '../../../shared/components/drop-downs/drop-down/drop-down.component';
import { Stepper } from '../types/steper.enum';
import { CustomerServiceComponent } from '../customer-service/customer-service.component';
import { CustomerTimeLineComponent } from '../customer-time-line/customer-time-line.component';
import { StepperComponent } from '../../../shared/components/steppers/stepper.component';
import { CustomerConfirmComponent } from '../customer-confirm/customer-confirm.component';
import { ConfirmModalComponent } from '../../../shared/components/modals/confirm.component';
import { DatepickerComponent } from '../../../shared/components/datepickers/datepicker/datepicker.component';
import { CustomerReservationHistoryComponent } from '../customer-reservation-history/customer-reservation-history.component';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    MasterHeader2Component,
    NgFor,
    FormsModule,
    IconsModule,
    Container2Component,
    Container3Component,
    RouterLinkComponent,
    DropDownComponent,
    CustomerServiceComponent,
    CustomerTimeLineComponent,
    StepperComponent,
    CustomerConfirmComponent,
    ConfirmModalComponent,
    DatepickerComponent,
    CustomerReservationHistoryComponent,
  ],

  templateUrl: './customer.component.html',
})
export class CustomerComponent {
  @Input()
  pageLinks = PageLinks;

  @Input()
  stepper = Stepper;
  @Input()
  step = Stepper.TRANSACTION;

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    console.log('Selected item:', item);
    this.isDropdownOpen = false; // close dropdown after selection
  }
}
