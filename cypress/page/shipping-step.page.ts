export class Shipping {
  private termsCheckBoxSelector: string;
  private checkoutButtonSelector: string;

  constructor () {
    this.termsCheckBoxSelector = '#cgv';
    this.checkoutButtonSelector = '#form > p > button > span';
  }

  public acceptsTerms() {
    cy.get(this.termsCheckBoxSelector).click();
  }

  public checkout() {
    cy.get(this.checkoutButtonSelector).click();
  }
}
