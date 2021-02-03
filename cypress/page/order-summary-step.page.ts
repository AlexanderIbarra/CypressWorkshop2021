export class OrderSummary {
  private orderSelector: string;

  constructor () {
      this.orderSelector = '#center_column > div > p > strong';
  }

  public getSummaryOrder() {
      return cy.get(this.orderSelector).click();
  }
}
