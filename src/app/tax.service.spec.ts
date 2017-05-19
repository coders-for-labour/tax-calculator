import { TestBed, inject } from '@angular/core/testing';

import { TaxService, TaxConfig } from './tax.service';
import { CURRENT_TAX } from "./configuration";

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
    expect(result.taxable).toEqual(8491);
    expect(result.allowance).toEqual(11509);
    expect(result.tax).toEqual(1698.2);

    console.log(result);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(8491);
    expect(result.bands.basic.tax).toEqual(1698.2);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(0);
    expect(result.bands.higher.tax).toEqual(0);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.tax).toEqual(0);
  }));

  it('should calculate properly for 75000', inject([TaxService], (service: TaxService) => {
    let salary: number = 75000;
    let result = service.calculate(salary, CURRENT_TAX);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(63491);
    expect(result.allowance).toEqual(11509);
    expect(result.tax).toEqual(18696.4);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.tax).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(29991);
    expect(result.bands.higher.tax).toEqual(11996.400000000001);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.tax).toEqual(0);
  }));

  it('should calculate properly for 150000', inject([TaxService], (service: TaxService) => {
    let salary: number = 150000;
    let result = service.calculate(salary, CURRENT_TAX);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(150000);
    expect(result.allowance).toEqual(0);
    expect(result.tax).toEqual(53300);

    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.tax).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(116500);
    expect(result.bands.higher.tax).toEqual(46600);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(0);
    expect(result.bands.additional.tax).toEqual(0);
  }));

  it('should calculate properly for 200000', inject([TaxService], (service: TaxService) => {
    let salary: number = 200000;
    let result = service.calculate(salary, CURRENT_TAX);
    expect(result).toBeTruthy();
    expect(result.taxable).toEqual(200000);
    expect(result.allowance).toEqual(0);
    expect(result.tax).toEqual(75800);
    
    expect(result.bands.basic.rate).toEqual(20);
    expect(result.bands.basic.taxable).toEqual(33500);
    expect(result.bands.basic.tax).toEqual(6700);
    
    expect(result.bands.higher.rate).toEqual(40);
    expect(result.bands.higher.taxable).toEqual(116500);
    expect(result.bands.higher.tax).toEqual(46600);

    expect(result.bands.additional.rate).toEqual(45);
    expect(result.bands.additional.taxable).toEqual(50000);
    expect(result.bands.additional.tax).toEqual(22500);
  }));
});
