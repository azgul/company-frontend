import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { CompanyListComponent }      from './company-list.component';
import { CompanyCreateComponent }  from './company-create.component';
import { CompanyDetailComponent }  from './company-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',       component: CompanyListComponent },
  { path: 'create',       component: CompanyCreateComponent },
  { path: 'detail/:id', component: CompanyDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
