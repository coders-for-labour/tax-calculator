import { NIBands } from './national-insurance.service';
import { TaxConfig } from './tax.service';
import { WcipfItem } from './wcipf.service';

// Based on latest HMRC (2016/2017) data https://www.gov.uk/government/statistics/percentile-points-from-1-to-99-for-total-income-before-and-after-tax
export const INCOME_PERCENTILES: number[] = [11200,11500,11700,11900,12200,12400,12600,12800,13100,13300,13500,13700,13900,14200,14400,14600,14900,15100,15300,15500,15800,16000,16200,16400,16700,16900,17100,17400,17600,17800,18100,18300,18600,18800,19100,19300,19600,19900,20200,20500,20800,21100,21400,21700,22000,22300,22600,22900,23300,23600,23900,24300,24700,25000,25400,25900,26300,26700,27100,27500,27900,28400,28800,29300,29800,30300,30900,31500,32000,32600,33200,33900,34500,35200,36000,36700,37500,38300,39200,40000,41000,42000,42900,43700,44900,46200,47800,49600,51400,53600,56300,59500,63500,68600,75300,83700,96400,116000,166000];

export const NATIONAL_INSURANCE: NIBands = {
  primary: {
    rate: 12,
    start: 166,
    end: 962
  },
  upper: {
    rate: 2,
    start: 962
  }
};

export const CURRENT_TAX: TaxConfig = {
  allowance: 12500,
  taperedAllowanceThreshold: 100000,
  bands: {
    basic: { start: 12500, end: 50000, rate: 20 },
    higher: { start: 50000, end: 100000, rate: 40 },
    tapered: { start: 100000, end: 125000, rate: 40 },
    zeroAllowance: { start: 125000, end: 150000, rate: 40 },
    additional: { start: 150000, rate: 45 }
  }
};

export const PROPOSED_TAX: TaxConfig = {
  allowance: 12500,
  taperedAllowanceThreshold: 100000,
  bands: {
    basic: { start: 12500, end: 50000, rate: 20 },
    higher: { start: 50000, end: 80000, rate: 40 },
    additional: { start: 80000, end: 100000, rate: 45 },
    tapered: { start: 100000, end: 125000, rate: 45 },
    top: { start: 125000, rate: 50 }
  }
};

export const WCIPF_DATA: WcipfItem[] = [
  {
    name: 'Junior Doctor',
    plural: 'Junior Doctors',
    cost: 30000
  },
  {
    name: 'School Meal',
    plural: 'School Meals',
    cost: 3.0
  }
];