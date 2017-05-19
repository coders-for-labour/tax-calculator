import { Injectable } from '@angular/core';

export interface NIBand {
  rate: number;
  start: number;
  end?: number;
}

export type NIBands = {
    [key: string]: NIBand; 
}

@Injectable()
export class NationalInsuranceService {
    public calculate(income: number, bands: NIBands): number {
      let weeklyIncome: number = income  / 52;
      let weeklyTotal: number = 0;

      for(let name in bands) {
        let band = bands[name];
        let deductableAmount: number = 0;

        if (weeklyIncome > band.start) {
          if (band.end)
            deductableAmount = Math.max(Math.min(weeklyIncome, band.end) - band.start, 0);
          else
            deductableAmount = Math.max(weeklyIncome - band.start, 0);
        }

        weeklyTotal += (deductableAmount / 100) * band.rate;
      }
      
      let annual = weeklyTotal * 52;
      return Math.round(annual * 100) / 100;
    }
}
