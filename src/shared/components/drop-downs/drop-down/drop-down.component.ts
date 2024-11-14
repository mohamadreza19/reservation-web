import { Component, ElementRef, Input } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { NgClass } from '@angular/common';
import { BtnComponent } from '../../buttons/btn.component';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [IconsModule, NgClass, BtnComponent],
  template: `
    <section
      (click)="toggleMenu()"
      [ngClass]="{
        'max-h-64 hover:!bg-white': isMenuOpen,
        'max-h-16': !isMenuOpen
      }"
      class="relative max-h-16 overflow-hidden transition-all duration-500 ease-in-out px-5 py-4 rounded-md hover:bg-neutral-100 hover:cursor-pointer bg-white shadow-md"
    >
      <section class="flex justify-between mb-6">
        <p>{{ header }}</p>
        <ng-icon name="faSolidSortDown" color=" #57534e" />
      </section>

      <div class="w-full p-4 flex flex-col gap-3 rounded-md bg-neutral-100">
        <div class="flex justify-between">
          <p>اصلاح موی سر</p>
          <button class="px-3 py-2 bg-black text-white rounded-md">
            انتخاب
          </button>
        </div>
        <div class="flex justify-between">
          <p>اصلاح موی سر</p>
          <button class="px-3 py-2 bg-black text-white rounded-md">
            انتخاب
          </button>
        </div>
      </div>
    </section>
  `,
})
export class DropDownComponent {
  @Input()
  header!: string;
  @Input()
  isMenuOpen: boolean = false;
  constructor(private elRef: ElementRef<HTMLElement>) {
    elRef.nativeElement.classList.add('w-full');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
