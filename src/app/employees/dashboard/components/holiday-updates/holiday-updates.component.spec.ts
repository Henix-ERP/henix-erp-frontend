import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayUpdatesComponent } from './holiday-updates.component';

describe('HolidayUpdatesComponent', () => {
  let component: HolidayUpdatesComponent;
  let fixture: ComponentFixture<HolidayUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayUpdatesComponent]
    });
    fixture = TestBed.createComponent(HolidayUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
