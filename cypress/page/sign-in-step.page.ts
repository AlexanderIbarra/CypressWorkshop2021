export class SignIn {
  private emailSelector: string;
  private passwordSelector: string;
  private submitSelector: string;

  constructor () {
    this.emailSelector = '#email';
    this.passwordSelector = '#passwd';
    this.submitSelector = '#SubmitLogin > span';
  }

  public logIn() {
    cy.get(this.emailSelector).type('prueba@yopmail.com');
    cy.get(this.passwordSelector).type('123456789');
    cy.get(this.submitSelector).click();
  }
}
