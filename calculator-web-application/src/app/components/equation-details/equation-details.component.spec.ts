import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationDetailsComponent } from './equation-details.component';

describe('EquationDetailsComponent', () => {
  let component: EquationDetailsComponent;
  let fixture: ComponentFixture<EquationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquationDetailsComponent]
    });
    fixture = TestBed.createComponent(EquationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
