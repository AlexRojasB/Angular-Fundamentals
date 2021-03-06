import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from './not-found.component';

const routes:Routes = [
  {
    path: '', redirectTo: 'passengers', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}