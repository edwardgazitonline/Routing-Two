import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppComponent , BrowserModule , AppRoutingModule]
})
export class AppRouting {


 }