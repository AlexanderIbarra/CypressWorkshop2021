export class Summary {
  private checkoutSelector: string;

  constructor () {
    this.checkoutSelector = '.cart_navigation span';
  }

  public checkout() {
    cy.get(this.checkoutSelector).click();
  }
}
