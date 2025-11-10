import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './dashboard/components/employee-details/employee-details.component';
import { AnnouncementsComponent } from './dashboard/components/announcements/announcements.component';
import { BirthdaysComponent } from './dashboard/components/birthdays/birthdays.component';
import { PolicyUpdatesComponent } from './dashboard/components/policy-updates/policy-updates.component';
import { HolidayUpdatesComponent } from './dashboard/components/holiday-updates/holiday-updates.component';
import { LeavesDetailComponent } from './dashboard/components/leaves-detail/leaves-detail.component';
import { NgChartsModule } from 'ng2-charts';
import { AttendanceComponent } from './dashboard/components/attendance/attendance.component';
import { ProjectsComponent } from './dashboard/components/projects/projects.component';
import { TeamMembersComponent } from './dashboard/components/team-members/team-members.component';
import { SkillsComponent } from './dashboard/components/skills/skills.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { RequestLeaveComponent } from './dashboard/components/request-leave/request-leave.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    EmployeesComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    AnnouncementsComponent,
    BirthdaysComponent,
    PolicyUpdatesComponent,
    HolidayUpdatesComponent,
    LeavesDetailComponent,
    AttendanceComponent,
    ProjectsComponent,
    TeamMembersComponent,
    SkillsComponent,
    ProfileComponent,
    RequestLeaveComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgChartsModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class EmployeesModule { }
