import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }         from './app-routing.module';

import { AppComponent }             from './app.component';
import { CompanyListComponent }       from './company-list.component';
import { CompanyCreateComponent }   from './company-create.component';
import { CompanyDetailComponent }   from './company-detail.component';
import { CompanyService }           from './company.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyCreateComponent,
    CompanyDetailComponent
  ],
  providers: [ CompanyService, FormBuilder ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
