import { Component } from '@angular/core';
import { BtnComponent, CardComponent } from 'src/shared/components';
import { Layout1Component } from 'src/shared/components/master/layout.component';
import { SliderComponent } from 'src/shared/components/sliders/slider/slider.component';
import { LandigFeatures } from 'src/shared/types/landing-features.interface';

@Component({
  selector: 'app-landig',
  standalone: true,
  imports: [Layout1Component, SliderComponent, BtnComponent, CardComponent],
  templateUrl: './landig.component.html',
  styleUrl: './landig.component.css',
})
export class LandigComponent {
  features: LandigFeatures[] = [
    {
      id: 1,
      title: 'فرآیند رزرو آسان',
      body: 'بدون پیچیدگی و در کمترین زمان ممکن.',
    },
    {
      id: 2,
      title: 'پشتیبانی از انواع خدمات ',
      body: ' مناسب برای کلینیک‌ها، سالن‌های زیبایی، مراکز آموزشی و مشاوره.',
    },
    {
      id: 3,
      title: 'مدیریت جامع نوبت‌ها',
      body: ' مشاهده و تنظیم نوبت‌ها با چند کلیک ساده.',
    },
    {
      id: 4,
      title: 'یادآوری خودکار',
      body: 'حفظ برنامه‌ها و عدم فراموشی با یادآوری‌های هوشمند.',
    },
  ];
}
