import { Component } from '@angular/core';
import { Equation } from 'src/app/models/equation.model';
import { EquationService } from 'src/app/services/equation.service';

@Component({
  selector: 'app-add-equation',
  templateUrl: './add-equation.component.html',
  styleUrls: ['./add-equation.component.css']
})
export class AddEquationComponent {
  equation: Equation = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private equationService: EquationService) { }

  saveEquation(): void {
    const data = {
      title: this.equation.title,
      description: this.equation.description
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
      title: '',
      description: '',
      published: false
    };
  }
}
