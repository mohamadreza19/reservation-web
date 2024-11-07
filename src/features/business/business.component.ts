import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css',
})
export class BusinessComponent {}
