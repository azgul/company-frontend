import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Company }           from './company';
import { CompanyService }    from './company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html'
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  selectedCompany: Company;

  constructor(
    private service: CompanyService,
    private router: Router) { }

  getHeroes(): void {
    this.service
      .getCompanies()
      .then(companies => this.companies = companies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.service.create(name)
      .then(hero => {
        this.companies.push(hero);
        this.selectedCompany = null;
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCompany.id]);
  }
}
