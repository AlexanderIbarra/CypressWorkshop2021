export class ProductAddedModal {
  private checkoutButtonSelector: string;

  constructor () {
    this.checkoutButtonSelector = '[style*="display: block;"] .button-container > a';
  }

  public checkout() {
    cy.get(this.checkoutButtonSelector).click();
  }
}
