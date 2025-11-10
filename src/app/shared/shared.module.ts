import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { CustomDatepickerComponent } from './components/custom-datepicker/custom-datepicker.component';



@NgModule({
  declarations: [
    CustomDropdownComponent,
    CustomDatepickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomDropdownComponent,
    CustomDatepickerComponent
  ]
})
export class SharedModule { }
