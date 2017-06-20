import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Company }           from './company';
import { CompanyService }    from './company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor(
    private service: CompanyService,
    private router: Router) { }

  getCompanies(): void {
    this.service
      .getCompanies()
      .then(companies => this.companies = companies);
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  gotoDetail(company: Company): void {
    this.router.navigate(['/detail', company.id]);
  }
}
