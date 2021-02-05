export class BankPayment {
  private payBankButtonSelector: string;

  constructor () {
    this.payBankButtonSelector = '.bankwire';
  }

  public selectBankPayment() {
    cy.get(this.payBankButtonSelector).click();
  }
}
