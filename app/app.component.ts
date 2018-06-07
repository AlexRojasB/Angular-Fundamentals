import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
  <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = "";

  constructor() {
    this.title = "Ultimate Angular";
  }

  handleInput(value: string) {
    this.name = value;
  }

  handleClick(value: string) {
    console.log(value);
  }
}
