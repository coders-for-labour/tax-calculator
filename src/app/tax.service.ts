export interface CalculationResult {
    allowance?: number;
    taxable?: number;
    change?: number;
    net?: number;
}

interface TaxBracket {
    max: number;
    rate: number;
}

interface TaxConfig {
    basic?: TaxBracket;
    middle?: TaxBracket;
    higher?: TaxBracket;
    additional?: TaxBracket;
}

const ALLOWANCE: number = 11500;
const ALLOWANCE_THRESHOLD: number = 100000;

const CURRENT_TAX: TaxConfig = {
    basic: { max: 33500, rate: 20 },
    higher: { max: 150000, rate: 40 },
    additional: { max: Number.MAX_SAFE_INTEGER, rate: 45 }
}

const PROPOSED_TAX: TaxConfig = {
    basic: { max: 33500, rate: 20 },
    middle: { max: 80000, rate: 40 },
    higher: { max: 123000, rate: 45 },
    additional: { max: Number.MAX_SAFE_INTEGER, rate: 50 }
}

export class TaxService {
    public calculate(salary: number): CalculationResult {
        var allowance = this.getAllowance(salary);
        var taxable = this.getTaxable(salary, allowance);
        var currentDeducted = this.deductTax(CURRENT_TAX, taxable);
        var proposedDeducted = this.deductTax(PROPOSED_TAX, taxable);
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
        var reduction = Math.floor(aboveThreshold / 2);
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

    private deductTax(config: TaxConfig, input: number): number {
        var basic = Math.min(config.basic.max, input);
        var middle = 0;
        var middleBand = 0;

        if (config.middle) {
            var earningsInMiddleBand = Math.max(input - config.basic.max, 0);
            middle = Math.min(earningsInMiddleBand, config.middle.max);
            middleBand = config.middle.max;
        }

        var earningsInHigherBand = Math.max(input - config.basic.max - middleBand, 0);
        var higher = Math.min(earningsInHigherBand, config.higher.max);

        var earningsinAdditionalBand = Math.max(input - config.basic.max - middleBand - config.higher.max, 0);
        var additional = Math.min(earningsinAdditionalBand, config.additional.max);
        console.log(basic, middle, higher, additional);
        return basic;
    }
}