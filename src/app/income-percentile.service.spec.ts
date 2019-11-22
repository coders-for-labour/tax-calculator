import { TestBed } from '@angular/core/testing';

import { IncomePercentileService } from './income-percentile.service';

describe('IncomePercentileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomePercentileService = TestBed.get(IncomePercentileService);
    expect(service).toBeTruthy();
  });
});
