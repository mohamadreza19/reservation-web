import { NgClass, NgFor } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InputStatus, InputType } from './types/input-status.inteface';
import { EmitChangeValue } from './types/emit-change-value.interface';

const inputConf = {
  required: true,
};

@Component({
  selector: 'app-list-input',

  standalone: true,
  imports: [NgClass, NgFor],
  template: ` <div
      class="hidden absolute w-[45px] z-20  flex-col justify-center items-center gap-y-4  overflow-hidden bg-indigo-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-gray-100"
      [ngClass]="{
        'list-input !flex': isListOpen,
        '!w-[65px]': direction === 'center',
        '-left-[1px]': direction === 'right',
        '-right-[1px]': direction === 'left',
      }"
    >
      <main
        #scrollbar
        class="input-list w-full  min-h-[200px] max-h-[200px] py-28 overflow-y-scroll no-scrollbar"
      >
        <section
          *ngFor="let item of list"
          class="w-full h-[40px] flex items-center justify-center  border-white text-white"
        >
          {{ item }}
        </section>
      </main>
    </div>
    <section
      class="cursor-pointer text-white"
      [ngClass]="{
        '!hidden': isListOpen,

      }"
      (click)="openList()"
    >
      {{ value }}
    </section>`,
})
export class ListInputComponent implements AfterViewInit, AfterViewChecked {
  @Input(inputConf)
  direction!: InputType;

  @Input(inputConf)
  value!: string;

  @Input(inputConf)
  list!: string[];

  @Input(inputConf)
  isListOpen!: boolean;

  @Output()
  statusChange: EventEmitter<InputStatus> = new EventEmitter<InputStatus>();
  @Output()
  valueChange: EventEmitter<EmitChangeValue> =
    new EventEmitter<EmitChangeValue>();

  @ViewChild('scrollbar', {
    read: ElementRef,
    static: true,
  })
  scrollbar!: ElementRef<HTMLElement>;

  timeoutId: any = null;

  constructor(private hostElement: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.hostElement.nativeElement.className =
      'relative h-full flex items-center ' + this.getClassForDirection();

    // this.selectedItem = this.list[0] || '';
  }
  ngAfterViewInit() {
    // Now you can access the scrollbar
    // This should now log the element reference correctly
    // const native = this.scrollbar.nativeElement;
    // console.log(native.offsetHeight);
  }
  ngAfterViewChecked() {
    // Check if the scrollbar element's clientHeight is now correctly calculated
    this.scrollbarInterceptor();
  }
  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement) {
    // Check if the click is outside this element
    const clickedInside =
      this.hostElement.nativeElement.contains(targetElement);
    if (!clickedInside && this.isListOpen) {
      this.closeList();
    }
  }
  openList() {
    const event: InputStatus = {
      status: 'open',
      type: this.direction,
    };

    this.statusChange.emit(event);

    const children = this.scrollbar.nativeElement.children;
    let matchChild: Element | null = null;

    for (let index = 0; index < children.length; index++) {
      const child = children[index] as HTMLElement;

      if (child.textContent?.trim() == this.value.trim()) {
        matchChild = child;
      }
    }
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      // this.scrollbar.nativeElement.scrollTop =
      //   matchChild?.scrollHeight as number;
      matchChild?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        // inline: 'start',
      });
    }, 500);
  }
  closeList() {
    const event: InputStatus = {
      status: 'closed',
      type: this.direction,
    };

    this.statusChange.emit(event);
  }
  handleSelectItem(val: string) {
    const data: EmitChangeValue = {
      type: this.direction,
      value: val,
    };
    this.valueChange.emit(data);
  }
  getClassForDirection() {
    switch (this.direction) {
      case 'right':
        return 'pe-[16px] justify-end w-40 ';
      case 'center':
        return 'border-x border-white w-[65px] justify-center h-full ';
      case 'left':
        return 'ps-[16px] justify-start w-40  ';
    }
  }
  scrollbarInterceptor() {
    const nativeElement = this.scrollbar.nativeElement;
    const hight = nativeElement.clientHeight;
    const TRIGGER = 6;

    if (hight) {
      const mid = hight / 2;

      nativeElement.addEventListener('scroll', (e: any) => {
        this.findMiddleChild(nativeElement, mid, TRIGGER);
        // console.log('scrollTop', nativeElement.scrollTop);
      });
    }
  }
  findMiddleChild(scrollbar: HTMLElement, mid: number, trigger: number) {
    const children = Array.from(scrollbar.children) as HTMLElement[];
    let closestChild = null;
    const CLASS_TOKEN = 'border-y';

    let minDiff = Infinity;

    // Loop through the children and calculate the distance from the middle
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childTop = child.offsetTop - scrollbar.scrollTop + trigger; // Distance from the top of the scrollbar
      const diff = Math.abs(childTop - mid);

      const hasBorder = child.classList.contains(CLASS_TOKEN);
      if (hasBorder) {
        child.classList.remove(CLASS_TOKEN);
      }

      // console.log(diff);
      if (diff < minDiff) {
        minDiff = diff;
        closestChild = child;
      }

      // console.log(diff);
    }

    // Optionally, log the index or details of the closest child

    if (closestChild) {
      // closestChild.classList.add('border-y');
      clearTimeout(this.timeoutId);

      this.timeoutId = setTimeout(() => {
        closestChild?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        closestChild.classList.add(CLASS_TOKEN);
        this.handleSelectItem(closestChild.textContent?.trim() as string);
      }, 500);
    }
  }
}
