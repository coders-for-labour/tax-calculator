import { TestBed, inject } from '@angular/core/testing';

import { NationalInsuranceService, NIBands } from './national-insurance.service';
import { NATIONAL_INSURANCE } from "./configuration";

describe('NationalInsuranceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NationalInsuranceService]
    });
  });

  it('should be created', inject([NationalInsuranceService], (service: NationalInsuranceService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate NI properly on 20000', inject([NationalInsuranceService], (service: NationalInsuranceService) => {
    let result = service.calculate(20000, NATIONAL_INSURANCE);
    expect(result).toEqual(1420.32);
  }));

  it('should calculate NI properly on 75000', inject([NationalInsuranceService], (service: NationalInsuranceService) => {
    let result = service.calculate(75000, NATIONAL_INSURANCE);
    expect(result).toEqual(5023.52);
  }));

  it('should calculate NI properly on 150000', inject([NationalInsuranceService], (service: NationalInsuranceService) => {
    let result = service.calculate(150000, NATIONAL_INSURANCE);
    expect(result).toEqual(6523.52);
  }));

  it('should calculate NI properly on 200000', inject([NationalInsuranceService], (service: NationalInsuranceService) => {
    let result = service.calculate(200000, NATIONAL_INSURANCE);
    expect(result).toEqual(7523.52);
  }));
});
