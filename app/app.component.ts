import { Component } from "@angular/core";

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
    <nav class="nav">
    <a *ngFor="let item of nav" [routerLink]="item.link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: item.exact}" > {{item.name}}</a>
    <!--<a routerLink="/oops" routerLinkActive="active">404</a>-->
    </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  // title: string;
  // name: string = "";

  // constructor() {
  //   this.title = "Ultimate Angular";
  // }

  // handleInput(value: string) {
  //   this.name = value;
  // }

  // handleClick(value: string) {
  //   console.log(value);
  // }
  nav: Nav[] = [{
    link: '/',
    name: 'Home',
    exact: true
  },
  {
    link: '/oops',
    name: '404',
    exact: false
  }]
}
