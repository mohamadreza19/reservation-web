import { Component, ElementRef } from '@angular/core';
import { DropDownComponent } from '../../../shared/components/drop-downs/drop-down/drop-down.component';
import { IconsModule } from 'src/shared/components/icons/icons.module';
import { Container2Component } from '../../../shared/components/containers/container2.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-service',
  standalone: true,
  imports: [DropDownComponent, IconsModule, Container2Component, NgFor],
  templateUrl: './customer-service.component.html',
})
export class CustomerServiceComponent {
  items = ['اصلاح مو', 'اصلاح ریش', 'Option 3', 'Option 4'];
  constructor(el: ElementRef<HTMLElement>) {
    el.nativeElement.classList.add('w-full');
  }
}
