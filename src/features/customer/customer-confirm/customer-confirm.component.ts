import { Component, Input } from '@angular/core';
import { ConfirmModalComponent } from '../../../shared/components/modals/confirm.component';

@Component({
  selector: 'app-customer-confirm',
  standalone: true,
  imports: [ConfirmModalComponent],
  templateUrl: './customer-confirm.component.html',
})
export class CustomerConfirmComponent {
  @Input()
  isModalOpen: boolean = false;
}
