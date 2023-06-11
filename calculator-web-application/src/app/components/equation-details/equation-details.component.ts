import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    title: '',
    description: '',
    published: false,
  }

  message = '';

  constructor(private equationService: EquationService, private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEquation(this.route.snapshot.params["id"]);
    }
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

  public updatePublished(status: boolean): void {
    const data = {
      title: this.currentEquation.title,
      description: this.currentEquation.description,
      published: status
    };

    this.message = '';

    this.equationService.update(this.currentEquation._id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentEquation.published = status;
        this.message = res.message ? res.message : 'The status was updated successfully!';
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
}
