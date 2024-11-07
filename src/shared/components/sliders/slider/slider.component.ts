import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';

import { CardComponent } from '../../cards/card.component';
import { BtnComponent } from '../../buttons/btn.component';
import { LandigFeatures } from 'src/shared/types/landing-features.interface';

// SwiperCore.use([Autoplay]);
@Component({
  standalone: true,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  imports: [BtnComponent, CardComponent],
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input({ required: true }) features: LandigFeatures[] = [];
  @ViewChild('swiperContainer') swiperContainer!: ElementRef<HTMLElement>;
  swiperInstance!: Swiper;
  _intervalRef: any;

  ngAfterViewInit() {
    // Initialize Swiper after the view has been initialized
    this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 'auto',
      breakpoints: {
        // Add responsive behavior for different screen sizes
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      spaceBetween: 0,
      loop: true,

      // Add other Swiper configuration options as needed
    });
    this.swiperInstance.el.dir = 'ltr';
    this._handleAutoplay();
  }

  private _handleAutoplay() {
    this._autoPlayInterval();
    this.swiperContainer.nativeElement.onmouseleave = () => {
      this._autoPlayInterval();
    };
    this.swiperContainer.nativeElement.onmouseenter = () => {
      clearInterval(this._intervalRef);
      this._intervalRef = null;
    };
  }
  private _autoPlayInterval() {
    this._intervalRef = setInterval(() => {
      this.swiperInstance.slideNext();
    }, 2000);
  }
}
