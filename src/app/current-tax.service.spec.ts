import { TestBed, inject } from '@angular/core/testing';

import { CurrentTaxService } from './current-tax.service';

describe('CurrentTaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentTaxService]
    });
  });

  it('should be created', inject([CurrentTaxService], (service: CurrentTaxService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate properly for 20000', inject([CurrentTaxService], (service: CurrentTaxService) => {
    let salary: number = 20000;
    let result = service.calculate(salary);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(8500);
    expect(result.allowance).toEqual(11500);
    expect(result.tax).toEqual(1700);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(8500);
    expect(result.bands.basic.tax).toEqual(1700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(0);
    expect(result.bands.higher.tax).toEqual(0);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.tax).toEqual(0);
  }));

  it('should calculate properly for 75000', inject([CurrentTaxService], (service: CurrentTaxService) => {
    let salary: number = 75000;
    let result = service.calculate(salary);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(63500);
    expect(result.allowance).toEqual(11500);
    expect(result.tax).toEqual(18700);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.tax).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(30000);
    expect(result.bands.higher.tax).toEqual(12000);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.tax).toEqual(0);
  }));

  it('should calculate properly for 150000', inject([CurrentTaxService], (service: CurrentTaxService) => {
    let salary: number = 150000;
    let result = service.calculate(salary);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(150000);
    expect(result.allowance).toEqual(0);
    expect(result.tax).toEqual(53300);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.tax).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(105000);
    expect(result.bands.higher.tax).toEqual(46600);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.tax).toEqual(0);
  }));

  it('should calculate properly for 200000', inject([CurrentTaxService], (service: CurrentTaxService) => {
    let salary: number = 200000;
    let result = service.calculate(salary);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(200000);
    expect(result.allowance).toEqual(0);
    expect(result.tax).toEqual(75800);
    
    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.tax).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(105000);
    expect(result.bands.higher.tax).toEqual(46600);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(50000);
    expect(result.bands.additional.tax).toEqual(22500);
  }));
});
