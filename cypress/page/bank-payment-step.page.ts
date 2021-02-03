export class BankPayment {
  private payBankSelector: string;

  constructor () {
    this.payBankSelector = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a';
  }

  public selectBankPayment() {
    cy.get(this.payBankSelector).click();
  }
}
