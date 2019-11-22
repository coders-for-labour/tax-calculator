import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from '@angular/material/button';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatMenuModule } from "@angular/material/menu";


import { AppComponent } from './app.component';

import { CurrentTaxService } from "./current-tax.service";
import { ProposedTaxService } from "./proposed-tax.service";
import { NationalInsuranceService } from "./national-insurance.service";
import { WcipfService } from "./wcipf.service";
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { CyclerComponent, CyclerItemComponent } from './cycler/cycler.component';
import { AutofocusDirective } from './autofocus.directive';
import { MapValuesPipe } from './map-values.pipe';
import { IncomePercentileService } from './income-percentile.service';

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
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    MatMenuModule,
    MatDialogModule,
    MatRippleModule,
    MatButtonModule,
    CurrencyMaskModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    MatMenuModule,
    MatDialogModule,
    MatRippleModule,
    MatButtonModule
  ],
  providers: [CurrentTaxService, ProposedTaxService, NationalInsuranceService, IncomePercentileService, WcipfService],
  bootstrap: [AppComponent],
  entryComponents: [WelcomeDialogComponent]
})
export class AppModule { }
