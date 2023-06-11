import { Component, OnInit } from '@angular/core';
import { Equation } from 'src/app/models/equation.model';
import { EquationService } from 'src/app/services/equation.service';

@Component({
  selector: 'app-equations-list',
  templateUrl: './equations-list.component.html',
  styleUrls: ['./equations-list.component.css']
})
export class EquationsListComponent implements OnInit {

  public equations?: Equation[];
  public currentEquation: Equation = {};
  public currentIndex = -1;
  public title = '';

  constructor(private equationService: EquationService) { }

  public ngOnInit(): void {
    this.retrieveEquations();
  }

  private retrieveEquations(): void {
    this.equationService.getAll().subscribe({
      next: (data) => {
        this.equations = data;
        console.log(data);
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  private refreshList(): void {
    this.retrieveEquations();
    this.currentEquation = {};
    this.currentIndex = -1;
  }

  public setActiveEquation(equation: Equation, index: number): void {
    this.currentEquation = equation;
    console.log(equation);
    this.currentIndex = index;
  }

  public removeAllEquations(): void {
    this.equationService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  public searchTitle(): void {
    this.currentEquation = {};
    this.currentIndex = -1;

    this.equationService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.equations = data;
        console.log(data);
      }, error: (err) => {
        console.error(err);
      }
    });
  }
}
