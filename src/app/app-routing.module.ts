import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { CompaniesComponent }      from './companies.component';
import { CompanyDetailComponent }  from './company-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',       component: CompaniesComponent },
  { path: 'detail/:id', component: CompanyDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
