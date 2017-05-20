import { TestBed, inject } from '@angular/core/testing';

import { WcipfService } from './wcipf.service';

describe('WcipfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcipfService]
    });
  });

  it('should be created', inject([WcipfService], (service: WcipfService) => {
    expect(service).toBeTruthy();
  }));

  it('should return data', inject([WcipfService], (service: WcipfService) => {
    var result = service.get(50000);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name).toEqual("Junior Doctor");
    expect(result[0].total).toEqual(1);
    expect(result[1].name).toEqual("School Meal");
    expect(result[1].total).toEqual(16666);
  }));
  
});
