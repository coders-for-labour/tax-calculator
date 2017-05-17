import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSliderChange, MdSlider } from "@angular/material";
import { TaxService, CalculationResult } from "./tax.service";

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

  public result: CalculationResult;

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
    this.result = this.tax.calculate(this._salary);
  }
}
