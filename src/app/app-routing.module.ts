import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'company', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'employee', canActivate: [authGuard], loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
