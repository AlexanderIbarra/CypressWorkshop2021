export class Payment {
  private paymentSelector: string;

  constructor () {
    this.paymentSelector = '#cart_navigation > button > span';
  }

  public confirmOrder() {
    cy.get(this.paymentSelector).click();
  }
}
