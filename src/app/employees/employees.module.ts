import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './dashboard/components/employee-details/employee-details.component';
import { AnnouncementsComponent } from './dashboard/components/announcements/announcements.component';
import { BirthdaysComponent } from './dashboard/components/birthdays/birthdays.component';
import { PolicyUpdatesComponent } from './dashboard/components/policy-updates/policy-updates.component';
import { HolidayUpdatesComponent } from './dashboard/components/holiday-updates/holiday-updates.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileInformationComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    AnnouncementsComponent,
    BirthdaysComponent,
    PolicyUpdatesComponent,
    HolidayUpdatesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
