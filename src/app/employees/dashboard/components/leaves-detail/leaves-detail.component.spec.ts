import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesDetailComponent } from './leaves-detail.component';

describe('LeavesDetailComponent', () => {
  let component: LeavesDetailComponent;
  let fixture: ComponentFixture<LeavesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavesDetailComponent]
    });
    fixture = TestBed.createComponent(LeavesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
