import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandigComponent } from './landig.component';

describe('LandigComponent', () => {
  let component: LandigComponent;
  let fixture: ComponentFixture<LandigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
