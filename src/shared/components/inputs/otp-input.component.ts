import { NgFor } from '@angular/common';
import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  NgModule,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BtnComponent } from '../buttons/btn.component';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [NgFor, FormsModule, BtnComponent],
  template: `
    <div class="flex flex-col justify-start gap-5  ">
      <label class="text-base w-full ps-2"
        >کد تایید را وارد کنید

        <p class="text-xs text-neutral-800 font-light mt-5">
          کد تایید برای
          <span> 09032446913 </span>
          پیامک شد
        </p>
      </label>

      <div class="flex gap-x-2 justify-center">
        <input
          *ngFor="let digit of otp; let i = index"
          type="text"
          maxlength="1"
          [(ngModel)]="otp[i]"
          #otpInput
          (input)="onInput($event, i)"
          (keydown)="onKeyDown($event, i)"
          class="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <app-btn [type]="'solid'">ارسال رمز</app-btn>
    </div>
  `,
})
export class OtpInputComponent {
  @Input()
  otp: string[] = ['', '', '', '', ''];

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  onInput(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    this.otp[index] = target.value;

    // Move to the next input
    if (target.value && index < 4) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }

    // Prevent entering more than one character
    if (target.value.length > 1) {
      target.value = target.value.slice(0, 1);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
      this.otpInputs.toArray()[index - 1].nativeElement.focus();
    }
  }
}
