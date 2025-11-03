import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public registrationForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      registrationType: ['', Validators.required],
      profilePicture: ['', Validators.required],
      roleId: ['', Validators.required]
    })
  }

  submit() {
    this.authenticationService.register(this.registrationForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
