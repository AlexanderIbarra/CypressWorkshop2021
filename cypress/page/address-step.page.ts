export class Address {
  private checkoutSelector: string;

  constructor () {
      this.checkoutSelector = '#center_column > form > p > button > span';
  }

  public checkout() {
      cy.get(this.checkoutSelector).click();
  }
}
