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
import { WcipfService } from "./wcipf.service";
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeDialogComponent
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
  providers: [TaxService, NationalInsuranceService, WcipfService],
  bootstrap: [AppComponent],
  entryComponents: [WelcomeDialogComponent]
})
export class AppModule { }
