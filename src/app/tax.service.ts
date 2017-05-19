import { Injectable } from "@angular/core";

interface TaxBand {
    start: number;
    end?: number;
    rate: number;
}

export interface TaxConfig {
    allowance: number;
    taperedAllowanceThreshold: number;
    bands: TaxBands;
}

export type TaxBands = { 
    [key: string]: TaxBand;
}

export interface TaxCalculation {
    rate: number;
    taxable: number;
    tax: number;
}

export type TaxResult = { 
    [key: string]: TaxCalculation; 
}

export interface CalculationResult {
    allowance?: number;
    taxable?: number;
    bands?: TaxResult;
    tax?: number;
    net?: number;
}

@Injectable()
export class TaxService {
    public calculate(income: number, config: TaxConfig): CalculationResult {
        let allowance = this.getAllowance(income, config);
        let taxable = this.getTaxable(income, allowance);
        let tax = this.calculateTax(taxable, config.bands);
        let net = income - tax.total;

        return {
            allowance: allowance,
            taxable: taxable,
            bands: tax.bands,
            tax: tax.total,
            net: net
        };
    }
 
    private getAllowance(income: number, config: TaxConfig): number {
        var taperedAllowanceDeduction = Math.max((income - config.taperedAllowanceThreshold) / 2, 0);
        return Math.max(config.allowance - taperedAllowanceDeduction, 0);
    }

    private getTaxable(income: number, allowance: number): number {
         return Math.max(income - allowance, 0);
    }

    private calculateTax(income: number, bands: TaxBands): { bands: TaxResult, total: number } {
        let result: TaxResult = {};
        let total = 0;

        for (let name in bands) {
            let band = bands[name];

            let taxable: number;

            if (band.end)
                taxable = Math.max(Math.min(income, band.end) - band.start, 0);
            else
                taxable = Math.max(income - band.start, 0);
 
            var per = band.rate / 100;
            var tax = taxable * per;
            total += tax;

            result[name] = {
                rate: band.rate,
                taxable: taxable,
                tax: tax
            }
        }

        return { bands: result, total: total };
    }
} 