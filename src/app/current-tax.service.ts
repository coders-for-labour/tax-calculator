import { Injectable } from "@angular/core";
import { CURRENT_TAX } from "./configuration";
import { TaxService, TaxResult, TaxBand, TaxConfig, TaxCalculation } from "./tax.service";

@Injectable()
export class CurrentTaxService extends TaxService {
    protected get config(): TaxConfig {
        return CURRENT_TAX;
    }

    protected calculateTax(income: number): { bands: TaxResult, total: number } {
        var basicBand = this.config.bands.basic;

        var freeBand: TaxBand = {
            start: 0, 
            end: basicBand.start,
            rate: 0
        };

        var freeResult: TaxCalculation = {
            rate: 0,
            taxable: Math.max(Math.min(income, freeBand.end) - freeBand.start, 0),
            tax: 0
        };

        var basicTaxable = Math.max(Math.min(income, basicBand.end) - basicBand.start, 0);
        var basicTax = basicTaxable * (basicBand.rate / 100);

        var basicResult: TaxCalculation = {
            rate: basicBand.rate,
            taxable: basicTaxable,
            tax: basicTax
        };

        var higherBand = this.config.bands.higher;
        var higherTaxable = Math.max(Math.min(income, higherBand.end) - higherBand.start, 0);
        var higherTax = higherTaxable * (higherBand.rate / 100);

        var higherResult: TaxCalculation = {
            rate: higherBand.rate,
            taxable: higherTaxable,
            tax: higherTax
        };

        var taperedBand = this.config.bands.tapered;
        var taperedTaxable = Math.max(Math.min(income, taperedBand.end) - taperedBand.start, 0);
        var taperedTax =  taperedTaxable * 1.5  * (taperedBand.rate / 100);

        var taperedResult: TaxCalculation = {
            rate: taperedBand.rate,
            taxable: taperedTaxable,
            tax: taperedTax
        };

        var zeroAllowanceBand = this.config.bands.zeroAllowance;
        var zeroAllowanceTaxable = Math.max(Math.min(income, zeroAllowanceBand.end) - zeroAllowanceBand.start, 0);
        var zeroAllowanceTax =  zeroAllowanceTaxable * (zeroAllowanceBand.rate / 100);

        var zeroAllowanceResult: TaxCalculation = {
            rate: zeroAllowanceBand.rate,
            taxable: zeroAllowanceTaxable,
            tax: zeroAllowanceTax
        };

        higherResult.tax += taperedTax + zeroAllowanceTax;
        higherResult.taxable += taperedTaxable + zeroAllowanceTaxable;

        var additionalBand = this.config.bands.additional;
        var additionalTaxable = Math.max(income - additionalBand.start, 0);
        var additionalTax = additionalTaxable * (additionalBand.rate / 100);

        var additionalResult: TaxCalculation = {
            rate: additionalBand.rate,
            taxable: additionalTaxable,
            tax: additionalTax
        };

        var total = basicTax + higherTax + taperedTax + zeroAllowanceTax + additionalTax;

        return {
            bands: {
                basic: basicResult,
                higher: higherResult,
                additional: additionalResult
            },
            total: total
        };
    }
} 