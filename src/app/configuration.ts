import { NIBands } from './national-insurance.service';
import { TaxConfig } from './tax.service';
import { WcipfItem } from './wcipf.service';

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