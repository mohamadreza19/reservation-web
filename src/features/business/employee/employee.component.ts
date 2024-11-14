import { Component, Input } from '@angular/core';
import { Layout1Component } from '../../../shared/components/master/layout.component';
import { Container2Component } from 'src/shared/components/containers/container2.component';
import { Container3Component } from '../../../shared/components/containers/container3.component';
import { BtnComponent } from '../../../shared/components/buttons/btn.component';
import { TextInputComponent } from '../../../shared/components/inputs/text-input.component';
import { IconsModule } from 'src/shared/components/icons/icons.module';
import { TableComponent } from '../../../shared/components/tables/table/table.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    Layout1Component,
    Container2Component,
    Container3Component,
    BtnComponent,
    TextInputComponent,
    IconsModule,
    TableComponent,
    NgClass,
    NgFor,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  sayHi(tt: string) {
    console.log(tt);
  }
  @Input()
  employees = [
    {
      name: 'علی رضایی',
      pwd: '1234',
    },
    {
      name: 'علی رضایی',
      pwd: '1234',
    },
  ];
}
