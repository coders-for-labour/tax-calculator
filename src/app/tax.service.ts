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
}

export class TaxService {
    public calculate(salary: number, config: TaxConfig): CalculationResult {
        var allowance = this.getAllowance(salary, config);
        var taxable = this.getTaxable(salary, allowance);
        var tax = this.calculateTax(taxable, config.bands);

        return {
            allowance: allowance,
            taxable: taxable,
            bands: tax.bands,
            tax: tax.total
        };
    }

    private getAllowance(salary: number, config: TaxConfig): number {
        var taperedAllowanceDeduction = Math.max((salary - config.taperedAllowanceThreshold) / 2, 0);
        return Math.max(config.allowance - taperedAllowanceDeduction, 0);
    }

    private getTaxable(salary: number, allowance: number): number {
         return Math.max(salary - allowance, 0);
    }

    private calculateTax(input: number, bands: TaxBands): { bands: TaxResult, total: number } {
        let result: TaxResult = {};
        let total = 0;

        for (let name in bands) {
            let band = bands[name];

            let taxable: number;

            if (band.end)
                taxable = Math.max(Math.min(input, band.end) - band.start, 0);
            else
                taxable = Math.max(input - band.start, 0);
 
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