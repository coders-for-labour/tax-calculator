import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "@angular/material";
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';

import { CurrentTaxService } from "./current-tax.service";
import { ProposedTaxService } from "./proposed-tax.service";
import { NationalInsuranceService } from "./national-insurance.service";
import { WcipfService } from "./wcipf.service";
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { CyclerComponent, CyclerItemComponent } from './cycler/cycler.component';
import { AutofocusDirective } from './autofocus.directive';
import { MapValuesPipe } from './map-values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeDialogComponent,
    CyclerComponent,
    CyclerItemComponent,
    AutofocusDirective,
    MapValuesPipe
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
  providers: [CurrentTaxService, ProposedTaxService, NationalInsuranceService, WcipfService],
  bootstrap: [AppComponent],
  entryComponents: [WelcomeDialogComponent]
})
export class AppModule { }
