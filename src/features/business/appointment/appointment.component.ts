import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { TimeLineItemComponent } from '../../../shared/components/containers/time-line-item.component';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { BusinessTimeSlotService } from '../business-timeslot.service';
import { DatepickerComponent } from '../../../shared/components/datepickers/datepicker/datepicker.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [TimeLineItemComponent, NgClass, DatepickerComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  @Input()
  isDatePickerHover = false;
  private subscriptions: Subscription = new Subscription();
  @ViewChild('containerElement') containerElement!: ElementRef;
  @ViewChild('fixedChildElement') fixedChildElement!: ElementRef;
  @HostListener('window:resize')
  @HostListener('window:scroll')
  onWindowEvent(): void {
    // this.setFixedChildPosition();
  }

  constructor(private businessTimeSlotService: BusinessTimeSlotService) {}

  private setFixedChildPosition(): void {
    if (!this.fixedChildElement) return;

    const fixedChildRect =
      this.fixedChildElement.nativeElement.getBoundingClientRect();

    // Get the window's dimensions
    const windowWidth = window.innerWidth - 120;
    const windowHeight = window.innerHeight - 40;

    // Calculate the position for the bottom-right of the window
    const windowBottom = windowHeight;
    const windowRight = windowWidth;

    // Position the fixed child element at the bottom-right corner of the window
    this.fixedChildElement.nativeElement.style.top = `${
      windowBottom - fixedChildRect.height
    }px`;
    this.fixedChildElement.nativeElement.style.right = `${
      windowRight - fixedChildRect.width
    }px`;
  }
  ngOnInit(): void {
    // Subscribe to the isDatePickerHover observable
    this.subscriptions.add(
      this.businessTimeSlotService.isDatePickerHover$.subscribe((hover) => {
        this.isDatePickerHover = hover;
        console.log('isDatePickerHover changed:', hover);
      })
    );
  }
  ngAfterViewInit() {
    this.setFixedChildPosition();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
