import { MenuContentPage, ProductAddedModal, ProductList, Summary, SignIn, Address, Shipping, BankPayment, Payment, OrderSummary } from '../page';

describe('Open the Page', () => {
  before(() => {
    cy.visit('http://automationpractice.com/');
  });

  describe('Buying the T -shirt', () => {
    describe('Select T-shirt and add to cart', () => {
        const menuContentPage =  new MenuContentPage();
        const productList = new ProductList();
        const productAddedModal = new ProductAddedModal();
        const summary = new Summary();
        const signIn = new SignIn();
        const address = new Address();
        const shipping = new Shipping();
        const bankPayment = new BankPayment();
        const payment = new Payment();
        const orderSummary = new OrderSummary();

        it('The order is completed', () => {
          menuContentPage.goToTShirtMenu();
          productList.addCart();
          productAddedModal.checkout();
          summary.checkout();
          signIn.logIn();
          address.checkout();
          shipping.acceptsTerms();
          shipping.checkout();
          bankPayment.selectBankPayment();
          payment.confirmOrder();
          orderSummary.getSummaryOrder().should('have.text', 'Your order on My Store is complete.');
        });
    });
  });
});
