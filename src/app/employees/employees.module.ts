import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileInformationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
