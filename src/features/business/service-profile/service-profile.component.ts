import { Component, Input } from '@angular/core';
import { Container3Component } from '../../../shared/components/containers/container3.component';
import { Container2Component } from '../../../shared/components/containers/container2.component';
import { TableComponent } from '../../../shared/components/tables/table/table.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-service-profile',
  standalone: true,
  imports: [
    Container3Component,
    Container2Component,
    TableComponent,
    NgFor,
    NgClass,
  ],
  templateUrl: './service-profile.component.html',
})
export class ServiceProfileComponent {
  @Input()
  serviceProfiles = [
    {
      name: 'علی رضایی',
      task: 'اصلاح موی سر',
    },
    {
      name: 'محسن یوسفی',
      task: 'اصلاح موی سر',
    },
  ];
  mewo() {}
}
