import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BoxedExpression, ComputeEngine } from '@cortex-js/compute-engine';
import { Equation } from 'src/app/models/equation.model';
import { EquationService } from 'src/app/services/equation.service';

@Component({
  selector: 'app-equation-details',
  templateUrl: './equation-details.component.html',
  styleUrls: ['./equation-details.component.css']
})
export class EquationDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentEquation: Equation = {
    expression: ''
  }

  variables: {symbols: string[], values: number[]} = {
    symbols: [],
    values: []
  };
  ce: ComputeEngine;
  expr: BoxedExpression | null = null;


  message = '';

  constructor(private equationService: EquationService, private route: ActivatedRoute, private router: Router, public snackBar: MatSnackBar) { 
    this.ce = new ComputeEngine();
  }

  public ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEquation(this.route.snapshot.params["id"]);
    }
  }

  public ngOnChanges(): void {
    this.expr = this.ce.parse(this.currentEquation.expression ?? null);
    this.setVariables(this.currentEquation);
  }

  private getEquation(id: string): void {
    this.equationService.get(id).subscribe({
      next: (data) => {
        this.currentEquation = data;
        console.log(data);
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  public updateEquation(): void {
    this.message = '';

    this.equationService.update(this.currentEquation._id, this.currentEquation).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message : 'This equation was updated successfully!';
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  public deleteEquation(): void {
    this.equationService.delete(this.currentEquation._id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/equations']);
      }, error: (err) => {
        console.error(err);
      }
    })
  }

  public setVariables(equation: Equation): void {
    if (equation.expression) {
      let expr = this.ce.parse(equation.expression);
      this.variables = {symbols: [], values: []};
      this.variables.symbols = expr.symbols;
      console.log("Hello");
    }
  }

  public evaluateEquation() {
    if (this.expr) {
      var result: any = {};
      this.variables.symbols.forEach((key, index) => result[key] = this.variables.values[index]);
      this.ce.set(result);
      let message = `${this.expr.N().valueOf()}`
      this.snackBar.open(message, undefined, {
        duration: 2000,
      });
    }
  }
}
