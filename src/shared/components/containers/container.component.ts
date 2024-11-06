import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  template: '<div class=""><ng-content></ng-content>< </div>',
})
export class ContainerComponent {}
