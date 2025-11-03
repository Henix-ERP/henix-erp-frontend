import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  submit() {
    this.authenticationService.login(this.loginForm.value).subscribe((res: any) => {
      if(res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/employee']);
      }
    })
  }
}
