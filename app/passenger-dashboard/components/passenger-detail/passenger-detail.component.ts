import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
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
             Searching for... {{name}}ty
         </div>
      </template>
      <div *ngIf="name.length > 2">
         Searching for... {{name}}
      </div> -->
     <!-- <button (click)="handleClick(username.value)"> Get Value </button>
      <input type="text" #username/>
      <div>{{name}}</div> -->
      <!--<h3> Airline Passengers </h3>
      <ul>
      <template ngFor let-passenger let-i = "index" [ngForOf]="passengers">
        <li>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </template>
      </ul>-->

    <span class="status" [ngStyle]="{backgroundColor : (detail.checkedIn ? '#2ecc71' : '#c0392b')}"></span>
    <div *ngIf="editing">
    <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name >
    </div>
     <div *ngIf="!editing" >{{ detail.fullname }}</div>
  <div class="date"> 
    check in date: 
    {{ detail.checkInDate ? (detail.checkInDate | date:'yMMMd' | uppercase) : 'Not checked in.' }}
  </div>

  <button (click)="toggleEdit()"> {{editing ? 'Done' : 'Edit'}} </button>
  <button (click)="onRemove()"> Remove </button>
    </div>
    `
})
export class PassengerDetailComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.detail){
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  @Input() detail: Passenger;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  @Output() remove: EventEmitter<any> = new EventEmitter();
  editing: boolean;
  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
}
