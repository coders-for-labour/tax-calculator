import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "@angular/material";
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';

import { TaxService } from "./tax.service";
import { NationalInsuranceService } from "./national-insurance.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    CurrencyMaskModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [TaxService, NationalInsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
