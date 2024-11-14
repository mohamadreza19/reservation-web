import { Component, OnInit } from '@angular/core';
import { TextInputComponent } from '../../../shared/components/inputs/text-input.component';
import { BtnComponent } from '../../../shared/components/buttons/btn.component';
import { typewriterEffect } from 'src/shared/utils/typewriter-effect.util';
import { OtpInputComponent } from '../../../shared/components/inputs/otp-input.component';

@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [TextInputComponent, BtnComponent, OtpInputComponent],
  template: `
    <div class="w-full h-screen magicpattern ">
      <img
        class="max-w-52 ms-5 relative bottom-1 cursor-pointer"
        src="/assets/svgs/svgexport-30.svg"
      />
      <div
        class=" flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white px-4 py-5 rounded-sm"
      >
        <div class="flex pb-10  ">
          <p class="text-4xl" [id]="'ASD3424'"></p>
        </div>

        <!-- <div class="flex flex-col justify-start gap-5">
          <label class="text-xl w-full">تلفن همراه</label>
          <app-text-input size="big" />
          <app-btn [type]="'solid'">ارسال رمز</app-btn>
        </div> -->

        <app-otp-input />
      </div>
    </div>
  `,
})
export class CustomerLoginComponent {
  ngAfterViewInit() {
    // Initialize the typewriter effect
    typewriterEffect('ASD3424');
  }
}
