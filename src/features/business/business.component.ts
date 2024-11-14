import {
  Component,
  ElementRef,
  HostListener,
  input,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Layout1Component } from '../../shared/components/master/layout.component';

import { IconsModule } from 'src/shared/components/icons/icons.module';
import { SolidBadgeComponent } from '../../shared/components/badges/solid.badge.component';
import { BtnComponent } from 'src/shared/components';
import { DatepickerComponent } from '../../shared/components/datepickers/datepicker/datepicker.component';
import { TimeSlotComponent } from 'src/shared/components/cards/time-slot/time-slot.card.component';
import { TimeSlot } from 'src/shared/types/time-slot.interface';
import { NgClass, NgFor } from '@angular/common';

import { TimeLineItemComponent } from '../../shared/components/containers/time-line-item.component';
import { RouterLinkComponent } from 'src/shared/components/links/router-link.component';
import { PageLinks } from 'src/shared/constants/page-links.enum';
@Component({
  selector: 'app-business',
  standalone: true,
  imports: [
    Layout1Component,
    SolidBadgeComponent,
    BtnComponent,
    DatepickerComponent,
    TimeSlotComponent,
    TimeLineItemComponent,
    //
    IconsModule,
    NgFor,
    RouterOutlet,
    RouterLinkComponent,
  ],

  templateUrl: './business.component.html',
  styleUrl: './business.component.css',
})
export class BusinessComponent {
  @Input()
  pageLinks = PageLinks;
}
