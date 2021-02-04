export class Address {
  private checkoutButtonSelector: string;

  constructor () {
    this.checkoutButtonSelector = '#center_column > form > p > button > span';
  }

  public checkout() {
    cy.get(this.checkoutButtonSelector).click();
  }
}
