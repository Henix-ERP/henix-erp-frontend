import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiCompanyEndpoint = environment.apiUrlCompanyService;
  constructor(
    private http: HttpClient
  ) { }

  createCompany(companyData: any) {
    return this.http.post(this.apiCompanyEndpoint+'company', companyData);
  }

  getCompany(id: any) {
    return this.http.get(this.apiCompanyEndpoint+'company/'+id);
  }

  getAllCompany() {
    return this.http.get(this.apiCompanyEndpoint+'companies');
  }
}
