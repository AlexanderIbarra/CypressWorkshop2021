export class ProductList{
  private productsSelector: string;

  constructor() {
    this.productsSelector = '.product-container';
  }

  private findByProduct(productName: string) {
    return cy.get(this.productsSelector)
      .find('.product-name')
      .contains(productName).first();
  }

  public selectProduct(productName: string) {
    return this.findByProduct(productName)
      .get('.ajax_add_to_cart_button.btn.btn-default')
      .click();
  }
}
