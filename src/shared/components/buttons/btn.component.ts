import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import {} from '@ng-icons/font-awesome';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      (click)="onButtonClick()"
      class="w-full border rounded-sm"
      [ngClass]="{
        'bg-white border-black text-black': type === 'outline',
        'bg-black border-blacks text-white': type === 'solid',
        'md:min-w-[366px] px-7 h-[66px]  text-2xl': size === 'big',
        ' px-2 py-2 flex justify-center ': size === 'auto',
        'full ': size === 'small',
        hostClass: hostClass
      }"
    >
      <ng-content />
    </button>
  `,
})
export class BtnComponent {
  @Input() type: 'solid' | 'outline' = 'solid';
  @Input() size: 'small' | 'medium' | 'big' | 'auto' = 'big';

  @Input() hostClass: string = '';

  @HostBinding('class') get applyClass() {
    return this.hostClass;
  }

  @Output() buttonClicked = new EventEmitter<void>();

  onButtonClick() {
    // Emit an event with some data when the button is clicked
    this.buttonClicked.emit();
  }
}
