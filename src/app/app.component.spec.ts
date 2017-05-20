import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AppComponent } from './app.component';
import { TaxService } from './tax.service';
import { NationalInsuranceService } from './national-insurance.service';
import { WcipfService } from "./wcipf.service";

describe('AppComponent', () => {
  let component : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, CurrencyMaskModule, FormsModule],
      declarations: [
        AppComponent
      ],
      providers: [TaxService, NationalInsuranceService, WcipfService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display allowance of £11,509', async(() => {
    expect(component.current.allowance).toEqual(11509);
  }));
});
