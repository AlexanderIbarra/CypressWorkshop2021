export class ProductAddedModal {
  private checkoutSelector: string;

  constructor () {
    this.checkoutSelector = '[style*="display: block;"] .button-container > a';
  }

  public checkout() {
    cy.get(this.checkoutSelector).click();
  }
}
