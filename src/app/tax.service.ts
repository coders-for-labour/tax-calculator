export interface CalculationResult {
    allowance?: number;
    taxable?: number;
    change?: number;
    net?: number;
}

const ALLOWANCE: number = 11500;
const ALLOWANCE_THRESHOLD: number = 100000;

export class TaxService {
    public calculate(salary: number): CalculationResult {
        var allowance = this.getAllowance(salary);
        var taxable = this.getTaxable(salary, allowance);

        // NEED TO CALCULATED DEDUCTIONS

        return {
            allowance: allowance,
            taxable: taxable
        };
    }

    // NEED TO CALCULATE ALLOWANCE CORRECTLY - @ £123,000 deduct £1 for every £2 over.
    private getAllowance(salary: number): number {
        if (salary <= ALLOWANCE_THRESHOLD)
            return ALLOWANCE;

        var aboveThreshold = salary - ALLOWANCE_THRESHOLD;
        var reduction = aboveThreshold * 0.5;
        var result = ALLOWANCE - reduction;

        if (result < 0)
            return 0;

        return result;
    }

    private getTaxable(salary: number, allowance: number): number {
        if (salary <= allowance)
            return 0;

        return salary - allowance;
    }
}