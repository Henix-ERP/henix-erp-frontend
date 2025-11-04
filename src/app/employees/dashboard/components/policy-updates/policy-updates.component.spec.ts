import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyUpdatesComponent } from './policy-updates.component';

describe('PolicyUpdatesComponent', () => {
  let component: PolicyUpdatesComponent;
  let fixture: ComponentFixture<PolicyUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyUpdatesComponent]
    });
    fixture = TestBed.createComponent(PolicyUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
