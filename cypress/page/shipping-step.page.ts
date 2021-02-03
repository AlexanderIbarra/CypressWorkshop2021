export class Shipping {
  private termsSelector: string;
  private checkoutSelector: string;

  constructor () {
      this.termsSelector = '#cgv';
      this.checkoutSelector = '#form > p > button > span';
  }

  public acceptsTerms() {
      cy.get(this.termsSelector).click();
  }

  public checkout() {
    cy.get(this.checkoutSelector).click();
}
}
