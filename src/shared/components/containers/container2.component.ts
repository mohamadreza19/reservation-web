import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container2',
  standalone: true,
  imports: [],
  template: `<div class="px-8 w-full">
    <header class="text-2xl ">{{ header }}</header>
    <ng-content></ng-content>
  </div>`,
})
export class Container2Component {
  @Input()
  header!: string;
}
