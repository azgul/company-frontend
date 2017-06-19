import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Company } from './company';

@Injectable()
export class CompanyService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://127.0.0.1:3000';

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

  create(name: string): Promise<Company> {
    const url = `${this.apiUrl}/company/create`;
    return this.http
      .post(url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Company)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
