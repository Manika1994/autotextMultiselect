import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';

import { AppComponent }   from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@NgModule({
  imports:      [ FormsModule, BrowserModule, BrowserAnimationsModule, DropDownsModule, DateInputsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
