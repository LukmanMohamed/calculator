import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquationsListComponent } from './components/equations-list/equations-list.component'
import { AddEquationComponent } from './components/add-equation/add-equation.component'
import { EquationDetailsComponent } from './components/equation-details/equation-details.component'


const routes: Routes = [
  {path: '', redirectTo: "equations", pathMatch: 'full'},
  {path: "equations", component: EquationsListComponent},
  {path: 'equations/:id', component: EquationDetailsComponent},
  {path: 'add', component: AddEquationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
