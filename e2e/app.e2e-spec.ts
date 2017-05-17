import { TaxCalculatorPage } from './app.po';

describe('tax-calculator App', () => {
  let page: TaxCalculatorPage;

  beforeEach(() => {
    page = new TaxCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
