import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateCompanyComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompaniesModule { }
