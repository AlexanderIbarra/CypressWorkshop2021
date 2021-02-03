export class ProductList {
  private addCartSelector: string;

  constructor () {
    this.addCartSelector = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
  }

  public addCart() {
    cy.get(this.addCartSelector).click();
  }
}
