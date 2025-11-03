import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent {

  public companyForm: FormGroup;
  public registrationForm: FormGroup;
  public firstStage = true;

  constructor(
    public formBuilder: FormBuilder,
    public companyService: CompanyService,
    private authenticationService: AuthenticationService
  ) {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      domainName: ['', Validators.required]
    });
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      registrationType: ['', Validators.required],
      profilePicture: ['', Validators.required],
      roleId: [1, Validators.required]
    });
  }

  next() {
    this.companyService.createCompany(this.companyForm.value).subscribe(res => {
      console.log(res)
      this.firstStage = false;
    })
  }

  submit() {
    this.authenticationService.register(this.registrationForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
