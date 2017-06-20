import { Component }          from '@angular/core';

@Component({
  selector: 'app-company-registry',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/list" routerLinkActive="active" class="btn btn-default">Company list</a>
      <a routerLink="/create" routerLinkActive="active" class="btn btn-default">Create company</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Company Registry';
}
