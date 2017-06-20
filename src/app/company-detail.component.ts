import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Company }           from './company';
import { CompanyService }    from './company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html'
})
export class CompanyDetailComponent {
  company: Company;

  constructor(
    private service: CompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.service.getCompany(+params['id']))
      .subscribe(company => this.company = company);
  }
}
