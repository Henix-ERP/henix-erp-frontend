import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeesComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileInformationComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
