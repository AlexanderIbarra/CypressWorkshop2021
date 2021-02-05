export class Payment {
  private confirmOrderButtonSelector: string;

  constructor () {
    this.confirmOrderButtonSelector = '#cart_navigation > button > span';
  }

  public confirmOrder() {
    cy.get(this.confirmOrderButtonSelector).click();
  }
}
