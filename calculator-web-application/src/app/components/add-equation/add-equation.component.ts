import { Component } from '@angular/core';
import { Equation } from 'src/app/models/equation.model';
import { EquationService } from 'src/app/services/equation.service';
import { ComputeEngine, Parser } from '@cortex-js/compute-engine';

@Component({
  selector: 'app-add-equation',
  templateUrl: './add-equation.component.html',
  styleUrls: ['./add-equation.component.css']
})
export class AddEquationComponent {
  equation: Equation = {
    expression: ''
  };
  submitted = false;

  constructor(private equationService: EquationService) { }

  saveEquation(): void {
    const data = {
      expression: this.equation.expression,
    };

    this.equationService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (err) => console.error(err)
      });
  }

  newEquation(): void {
    this.submitted = false;
    this.equation = {
      expression: '',
    };
  }
}
