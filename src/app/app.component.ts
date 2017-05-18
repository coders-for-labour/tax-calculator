import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSliderChange, MdSlider } from "@angular/material";
import { TaxService, CalculationResult, TaxConfig } from "./tax.service";

const CURRENT_TAX: TaxConfig = { 
    allowance: 11500,
    taperedAllowanceThreshold: 100000,
    bands: {
      basic: { start: 0, end: 33500, rate: 20 },
      higher: { start: 33500, end: 150000, rate: 40 },
      additional: { start: 150000, rate: 45 }
    }
}

const PROPOSED_TAX: TaxConfig = { 
    allowance: 11500,
    taperedAllowanceThreshold: 100000,
    bands: {
      basic: { start: 0, end: 33500, rate: 20 },
      higher: { start: 33500, end: 80000, rate: 40 },
      additional: { start: 80000, end: 123000, rate: 45 },
      extra: { start: 123000, rate: 50 }
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'app works!';

  private _salary: number = 0;

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    this._salary = value;
    this.calculate();
  }

  public current: CalculationResult;
  public proposed: CalculationResult;

  @ViewChild("slider")
  public slider: MdSlider;

  constructor(private tax: TaxService) {}

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
  }
}
