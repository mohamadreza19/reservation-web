import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/buttons/btn.component';
import { TextInputComponent } from '../../../shared/components/inputs/text-input.component';

@Component({
  selector: 'app-business-login',
  standalone: true,
  imports: [BtnComponent, TextInputComponent],
  templateUrl: './business-login.component.html',
  styleUrl: './business-login.component.css',
})
export class BusinessLoginComponent {}
