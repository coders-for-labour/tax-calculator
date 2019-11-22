import { Injectable } from '@angular/core';
import { INCOME_PERCENTILES } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class IncomePercentileService {
  public calculate(salary: number): number {
    const closest = INCOME_PERCENTILES.reduce(function(prev, curr) {
      return (Math.abs(curr - salary) < Math.abs(prev - salary) ? curr : prev);
    });

    const percentile = INCOME_PERCENTILES.indexOf(closest) + 1;
    return 100 - percentile;
  }
}
