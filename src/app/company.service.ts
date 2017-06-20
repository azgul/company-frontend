import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Company } from './company';

@Injectable()
export class CompanyService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'https://pacific-cove-37240.herokuapp.com';

  constructor(private http: Http) { }

  getCompanies(): Promise<Company[]> {
    const url = `${this.apiUrl}/companies/all`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Company[])
      .catch(this.handleError);
  }

  getCompany(id: number): Promise<Company> {
    const url = `${this.apiUrl}/company/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Company)
      .catch(this.handleError);
  }

  create(company: Company): Promise<Company> {
    const url = `${this.apiUrl}/company/create`;
    return this.http
      .post(url, JSON.stringify(company), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Company)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
