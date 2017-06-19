import { Component, Input } from '@angular/core';

import { Company } from './company';
@Component({
  selector: 'company-detail',
  template: `
    <div *ngIf="company">
      <h2>{{company.name}} details!</h2>
      <div><label>id: </label>{{company.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="company.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class CompanyDetailComponent {
  @Input() company: Company;
}
