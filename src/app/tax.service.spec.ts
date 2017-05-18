import { TestBed, inject } from '@angular/core/testing';

import { TaxService, TaxConfig } from './tax.service';

const CURRENT_TAX: TaxConfig = { 
    allowance: 11500,
    taperedAllowanceThreshold: 100000,
    bands: {
      basic: { start: 0, end: 33500, rate: 20 },
      higher: { start: 33500, end: 150000, rate: 40 },
      additional: { start: 150000, rate: 45 }
    }
}

describe('TaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxService]
    });
  });

  it('should be created', inject([TaxService], (service: TaxService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate properly for 20000', inject([TaxService], (service: TaxService) => {
    let salary: number = 20000;
    let result = service.calculate(salary, CURRENT_TAX);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(8500);
    expect(result.allowance).toEqual(11500);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(8500);
    expect(result.bands.basic.value).toEqual(1700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(0);
    expect(result.bands.higher.value).toEqual(0);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.value).toEqual(0);
  }));

  it('should calculate properly for 75000', inject([TaxService], (service: TaxService) => {
    let salary: number = 75000;
    let result = service.calculate(salary, CURRENT_TAX);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(63500);
    expect(result.allowance).toEqual(11500);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.value).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(30000);
    expect(result.bands.higher.value).toEqual(12000);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.value).toEqual(0);
  }));

  it('should calculate properly for 150000', inject([TaxService], (service: TaxService) => {
    let salary: number = 150000;
    let result = service.calculate(salary, CURRENT_TAX);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(150000);
    expect(result.allowance).toEqual(0);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.value).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(116500);
    expect(result.bands.higher.value).toEqual(46600);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.value).toEqual(0);
  }));

  it('should calculate properly for 200000', inject([TaxService], (service: TaxService) => {
    let salary: number = 200000;
    let result = service.calculate(salary, CURRENT_TAX);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(200000);
    expect(result.allowance).toEqual(0);
    
    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.value).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(116500);
    expect(result.bands.higher.value).toEqual(46600);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(50000);
    expect(result.bands.additional.value).toEqual(22500);
  }));
});
