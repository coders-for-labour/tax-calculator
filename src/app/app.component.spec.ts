import { NgModule } from "@angular/core";
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AppComponent } from './app.component';
import { AutofocusDirective } from "./autofocus.directive";
import { CyclerComponent, CyclerItemComponent } from "./cycler/cycler.component";
import { MapValuesPipe } from "./map-values.pipe";
import { WelcomeDialogComponent } from "./welcome-dialog/welcome-dialog.component";

import { CurrentTaxService } from './current-tax.service';
import { ProposedTaxService } from './proposed-tax.service';
import { NationalInsuranceService } from './national-insurance.service';
import { WcipfService } from "./wcipf.service";

@NgModule({
  imports: [MaterialModule],
  declarations: [WelcomeDialogComponent],
  entryComponents: [WelcomeDialogComponent]
})
class TestModule {}

describe('AppComponent', () => {
  let component : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, MaterialModule, BrowserAnimationsModule, CurrencyMaskModule, FormsModule],
      declarations: [
        AppComponent,
        AutofocusDirective,
        CyclerComponent,
        CyclerItemComponent,
        MapValuesPipe
      ],
      providers: [CurrentTaxService, ProposedTaxService, NationalInsuranceService, WcipfService],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display allowance of £11,500', async(() => {
    expect(component.current.allowance).toEqual(11500);
  }));
});
