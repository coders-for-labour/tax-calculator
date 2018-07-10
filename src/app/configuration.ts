import { NIBands } from './national-insurance.service';
import { TaxConfig } from './tax.service';
import { WcipfItem } from './wcipf.service';

export const NATIONAL_INSURANCE: NIBands = {
  primary: {
    rate: 12,
    start: 162,
    end: 892
  },
  upper: {
    rate: 2,
    start: 892
  }
};

export const CURRENT_TAX: TaxConfig = {
  allowance: 11850,
  taperedAllowanceThreshold: 100000,
  bands: {
    basic: { start: 11850, end: 46350, rate: 20 },
    higher: { start: 46350, end: 100000, rate: 40 },
    tapered: { start: 100000, end: 123700, rate: 40 },
    zeroAllowance: { start: 123700, end: 150000, rate: 40 },
    additional: { start: 150000, rate: 45 }
  }
};

export const PROPOSED_TAX: TaxConfig = {
  allowance: 11850,
  taperedAllowanceThreshold: 100000,
  bands: {
    basic: { start: 11850, end: 46350, rate: 20 },
    higher: { start: 46350, end: 80000, rate: 40 },
    additional: { start: 80000, end: 100000, rate: 45 },
    tapered: { start: 100000, end: 123700, rate: 45 },
    top: { start: 123700, rate: 50 }
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
