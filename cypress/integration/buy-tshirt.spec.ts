import { MenuContentPage,
  ProductAddedModal,
  ProductList,
  Summary,
  SignIn,
  Address,
  Shipping,
  BankPayment,
  Payment,
  OrderSummary } from '../page';

describe('Given a user who wants to buy a T-shirt', () => {
  before(() => {
    cy.visit('http://automationpractice.com/');
  });

  describe('When the user does the process', () => {
    before(() => {
      const menuContentPage =  new MenuContentPage();
      const productList = new ProductList();
      const productAddedModal = new ProductAddedModal();
      const summary = new Summary();

      menuContentPage.goToTShirtMenu();
      productList.selectProduct('Faded Short Sleeve T-shirts');
      productAddedModal.checkout();
      summary.checkout();
    });

    describe('And Loging in the app', () => {
      before(() => {
        const signIn = new SignIn();
        signIn.logIn();
      });

      describe('And Select the default address', () => {
        before(() => {
          const address = new Address();
          address.checkout();
        });

        describe('And Pay with bank', () => {
          const orderSummary = new OrderSummary();

          before(() => {
            const shipping = new Shipping();
            const bankPayment = new BankPayment();
            const payment = new Payment();

            shipping.acceptsTerms();
            shipping.checkout();
            bankPayment.selectBankPayment();
            payment.confirmOrder();
          });

          it('Then The order should be completed', () => {
            orderSummary.getSummaryOrder()
            .should('have.text', 'Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
