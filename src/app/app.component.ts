import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSliderChange, MdSlider } from "@angular/material";
import { TaxService, CalculationResult } from "./tax.service";
import { NationalInsuranceService } from "./national-insurance.service";
import { CURRENT_TAX, PROPOSED_TAX, NATIONAL_INSURANCE } from "./configuration";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
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

  @ViewChild("slider")
  public slider: MdSlider;

  constructor(
    private tax: TaxService,
    private nationalInsurance: NationalInsuranceService) {}

  public ngOnInit(): void {
    setTimeout(() => this.sliderUpdate(this.slider.value), 10);
  }

  public onInputChange(event: MdSliderChange): void {
      this.sliderUpdate(event.value);
  }

  private sliderUpdate(input: number): void {
    if (input == 1) {
        this.salary = 10000;
        return;
    }

    var minp = 0;
    var maxp = 100;

    var minv = Math.log(10000);
    var maxv = Math.log(1000000);

    var scale = (maxv-minv) / (maxp-minp);
    var value = Math.exp(minv + scale*(input-minp));

    if(value < 100000)
      value = Math.round(value/500)*500;
    else
      value = Math.round(value/10000)*10000;

    if (value == 79500)
      value = 80000;

    if (value == 120000)
      value = 123000;

    this.salary = value;
  }

  private calculate(): void {
    this.current = this.tax.calculate(this._salary, CURRENT_TAX);
    this.proposed = this.tax.calculate(this._salary, PROPOSED_TAX);
    this.ni = this.nationalInsurance.calculate(this._salary, NATIONAL_INSURANCE);
  }
}
