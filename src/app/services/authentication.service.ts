import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authEndpoint = environment.authUrl;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Company-Id': '1', // you can set dynamic later
  });

  constructor(
    public http: HttpClient
  ) { }

  login(userData: any) {
    return this.http.post(this.authEndpoint+'login', userData, {headers: this.headers});
  }

  register(userData: any) {
    return this.http.post(this.authEndpoint+'register', userData, {headers: this.headers});
  }
}
