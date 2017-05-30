
export interface TaxBand {
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

export abstract class TaxService {
    protected abstract get config(): TaxConfig;

    public calculate(income: number): CalculationResult {
        let allowance = this.getAllowance(income);
        let taxable = this.getTaxable(income, allowance);
        let tax = this.calculateTax(income);
        let net = income - tax.total;

        return {
            allowance: allowance,
            taxable: taxable,
            bands: tax.bands,
            tax: tax.total,
            net: net
        };
    }

    private getAllowance(income: number): number {
        var taperedAllowanceDeduction = Math.max((income - this.config.taperedAllowanceThreshold) / 2, 0);
        return Math.max(this.config.allowance - taperedAllowanceDeduction, 0);
    }

    private getTaxable(income: number, allowance: number): number {
         return Math.max(income - allowance, 0);
    }

    protected abstract calculateTax(income: number): { bands: TaxResult, total: number };
}

