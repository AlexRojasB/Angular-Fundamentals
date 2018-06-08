import { Passenger } from "./models/passenger.interface";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/throw";
import "rxjs/add/operator/toPromise";

const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassenger(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassengerPromise(): Promise<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .toPromise()
      .then((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers: Headers = new Headers({
      "Content-Type": "application/json"
    });

    let options: RequestOptions = new RequestOptions({
      headers: headers
    });

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassengerPromise(passenger: Passenger): Promise<Passenger> {
    let headers: Headers = new Headers({
      "Content-Type": "application/json"
    });

    let options: RequestOptions = new RequestOptions({
      headers: headers
    });

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .toPromise()
      .then((response: Response) => response.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removePassengerPromise(passenger: Passenger): Promise<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .toPromise()
      .then((response: Response) => response.json());
  }
}
