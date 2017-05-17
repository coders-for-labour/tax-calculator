import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSliderModule } from "@angular/material";

import { AppComponent } from './app.component';

import { TaxService } from "./tax.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSliderModule
  ],
  providers: [TaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
