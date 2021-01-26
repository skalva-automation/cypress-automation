import BasePage from "./basePage";

export default class checkoutPage extends BasePage {
  constructor() {
    super();
  }

  clickCheckoutButton() {
    cy.get("#cart_checkout1").click({ force: true });
  }

  orderConfirmation(message) {
    cy.get(".maintext").should(($maintext) => {
      expect($maintext.get(0).innerText.trim()).to.eq(message);
    });
  }

  verifyTotalAmount(amount) {
    cy.get(".totalamout").should(($maintext) => {
      expect($maintext.get(1).innerText.trim()).to.eq(amount);
    });
  }
}
