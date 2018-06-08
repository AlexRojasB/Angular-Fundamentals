import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
    
  <passenger-count [items]="passengers"></passenger-count>
  <passenger-detail *ngFor="let passenger of passengers;" [detail]="passenger" (edit)="handleEdit($event)" (remove)="handleRemove($event)"></passenger-detail>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  ngOnInit(): void {
    this.passengerService
      .getPassengersPromise() //to use the promise alternative methods, just change subscribe to then
      .then((data: Passenger[]) => (this.passengers = data));
  }

  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService) {}

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter(
          (passenger: Passenger) => passenger.id !== event.id
        );
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            //passenger = Object.assign({}, passenger, event);
            return event;
          }
          return passenger;
        });
      });
  }
}
