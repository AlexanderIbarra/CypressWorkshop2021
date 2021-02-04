export class Summary {
  private checkoutButtonSelector: string;

  constructor () {
    this.checkoutButtonSelector = '.cart_navigation span';
  }

  public checkout() {
    cy.get(this.checkoutButtonSelector).click();
  }
}
