import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdFormComponent } from './td-form/td-form.component';
import { RFormComponent } from './r-form/r-form.component';
import { HomeComponent } from './home/home.component';
import { SubmittedComponent } from './submitted/submitted.component';


const routes: Routes = [
  {path: 'template', component: TdFormComponent},
  {path:'reactive', component: RFormComponent},
  {path: 'submitted', component: SubmittedComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
