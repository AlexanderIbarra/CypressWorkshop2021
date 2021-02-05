export class SignIn {
  private emailSelector: string;
  private passwordSelector: string;
  private submitButtonSelector: string;

  constructor () {
    this.emailSelector = '#email';
    this.passwordSelector = '#passwd';
    this.submitButtonSelector = '#SubmitLogin > span';
  }

  public logIn() {
    cy.get(this.emailSelector).type('prueba@yopmail.com');
    cy.get(this.passwordSelector).type('123456789');
    cy.get(this.submitButtonSelector).click();
  }
}
