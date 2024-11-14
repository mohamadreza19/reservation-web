import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterHeaderComponent } from '../../shared/components';

import { landingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MasterHeaderComponent, landingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reservation-web';
}
