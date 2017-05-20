import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MdSliderChange, MdSlider, MdDialog } from "@angular/material";
import { TaxService, CalculationResult } from "./tax.service";
import { NationalInsuranceService } from "./national-insurance.service";
import { WcipfService, WcipfResultItem } from "./wcipf.service";
import { CURRENT_TAX, PROPOSED_TAX, NATIONAL_INSURANCE } from "./configuration";
import { WelcomeDialogComponent } from "./welcome-dialog/welcome-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit { 
  private _salary: number = 0;
  private _manualEntry: boolean = false;
  public ni: number = 0;

  public get manualEntry(): boolean {
    return this._manualEntry;
  }

  public set manualEntry(value: boolean) {
    this._manualEntry = value;
    if (!value)
      this.sliderUpdate(this.slider.value);
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    if (value > 9999999)
      value = 9999999;

    this._salary = value;
    this.calculate();
  }

  public current: CalculationResult;
  public proposed: CalculationResult;

  public wcipfResults: WcipfResultItem[];

  @ViewChild("slider")
  public slider: MdSlider;

  constructor(
    private tax: TaxService,
    private nationalInsurance: NationalInsuranceService,
    private wcipf: WcipfService,
    private dialog: MdDialog) {}

  public ngOnInit(): void {
    setTimeout(() => this.sliderUpdate(this.slider.value), 10);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.dialog.open(WelcomeDialogComponent), 10);
  }

  public onInputChange(event: MdSliderChange): void {
      this.sliderUpdate(event.value);
  }

  public setSlider(value: number): void {
    this.slider.value = value;
    this.sliderUpdate(value);
  }

  private sliderUpdate(input: number): void {
    if (input == 1) {
        this.salary = 10000;
        return;
    }

    var minp = 0;
    var maxp = 150;

    var minv = Math.log(10000);
    var maxv = Math.log(250000);

    var scale = (maxv-minv) / (maxp-minp);
    var value = Math.exp(minv + scale * (input - minp));

    if(value < 100000)
      value = Math.round(value / 500) * 500;
    else if (value < 130000)
      value = Math.round(value / 1000) * 1000;
    else
      value = Math.round(value / 5000) * 5000;

    this.salary = value;
  }

  private calculate(): void {
    this.current = this.tax.calculate(this._salary, CURRENT_TAX);
    this.proposed = this.tax.calculate(this._salary, PROPOSED_TAX);
    this.ni = this.nationalInsurance.calculate(this._salary, NATIONAL_INSURANCE);
    this.wcipfResults = this.wcipf.get(this.proposed.tax - this.current.tax);
  }
}
