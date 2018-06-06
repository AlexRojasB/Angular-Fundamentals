import { Component } from "@angular/core";
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Child[] | null;
}

interface Child {
  name: string;
  age: number;
}
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
     <!--<h1 [innerHTML]="title" ></h1>
      <input type="text" 
      [ngModel] ="name"
      (ngModelChange)="handleInput($event)"
      />
      <input type="text" 
      [(ngModel)] ="name"
      />
      <template [ngIf]="name.length > 2">
        <div>
             Searching for... {{name}}
         </div>
      </template>
      <div *ngIf="name.length > 2">
         Searching for... {{name}}
      </div> -->
     <!-- <button (click)="handleClick(username.value)"> Get Value </button>
      <input type="text" #username/>
      <div>{{name}}</div> -->
      <h3> Airline Passengers </h3>
     <!-- <ul>
      <template ngFor let-passenger let-i = "index" [ngForOf]="passengers">
        <li>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </template>
      </ul>-->
    <!--  <ul>
      <li *ngFor="let passenger of passengers; let i = index;" >
      <span 
      class="status"
      [class.checked-in]="passenger.checkedIn"></span>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>-->
    <!--<ul>
      <li *ngFor="let passenger of passengers; let i = index;" >
      <span 
      class="status"
      [ngClass]="{ 'checked-in' : passenger.checkedIn }"></span>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>-->
    <!--<ul>
    <li *ngFor="let passenger of passengers; let i = index;" >
    <span 
    class="status"
    [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span>
      {{ i }}: {{ passenger.fullname }}
    </li>
  </ul>-->
  <ul>
    <li *ngFor="let passenger of passengers; let i = index;" >
    <span 
    class="status"
    [ngStyle]="{backgroundColor : (passenger.checkedIn ? '#2ecc71' : '#c0392b')}"></span>
      {{ i }}: {{ passenger.fullname }}
      <p> {{ passenger | json }} </p>
      <div class="date"> 
        check in date: 
        {{ passenger.checkInDate ? (passenger.checkInDate | date:'yMMMd' | uppercase) : 'Not checked in.' }}
      </div>
      <div class="children">
        Children: {{passenger.children?.length || '0' }}
      </div>
    </li>
  </ul>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = "";
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12}, { name: 'Chloe', age: 7 }]
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: true,
      checkInDate: 149160600000,
      children: null
    },
    {
      id: 4,
      fullname: "Louise",
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{name: 'Jessica', age: 1 }]
    },
    {
      id: 5,
      fullname: "Tina",
      checkedIn: false,
      checkInDate: null,
      children: null
    }
  ];

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
