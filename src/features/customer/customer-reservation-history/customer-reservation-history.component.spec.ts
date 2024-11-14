import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReservationHistoryComponent } from './customer-reservation-history.component';

describe('CustomerReservationHistoryComponent', () => {
  let component: CustomerReservationHistoryComponent;
  let fixture: ComponentFixture<CustomerReservationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerReservationHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerReservationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
