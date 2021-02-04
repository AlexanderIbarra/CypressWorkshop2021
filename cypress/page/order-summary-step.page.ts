export class OrderSummary {
  private orderSummarySelector: string;

  constructor () {
    this.orderSummarySelector = '#center_column > div > p > strong';
  }

  public getSummaryOrder() {
    return cy.get(this.orderSummarySelector).click();
  }
}
