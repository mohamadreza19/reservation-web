import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterHeaderComponent } from '../../shared/components';
import { LandigComponent } from '../landig/landig.component';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MasterHeaderComponent, LandigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reservation-web';
}
