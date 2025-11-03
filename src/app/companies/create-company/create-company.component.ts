import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent {

  public companyForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public companyService: CompanyService
  ) {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      domainName: ['', Validators.required]
    });
  }

  submit() {
    this.companyService.createCompany(this.companyForm.value).subscribe(res => {
      console.log(res)
    })
  }
}
