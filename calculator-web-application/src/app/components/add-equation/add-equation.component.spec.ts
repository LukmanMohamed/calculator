import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquationComponent } from './add-equation.component';

describe('AddEquationComponent', () => {
  let component: AddEquationComponent;
  let fixture: ComponentFixture<AddEquationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEquationComponent]
    });
    fixture = TestBed.createComponent(AddEquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
