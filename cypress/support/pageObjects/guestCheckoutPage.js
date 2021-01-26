import BasePage from "./basePage";

export default class GuestCheckoutPage extends BasePage {
  constructor() {
    super();
  }

  selectGuestAndContinue() {
    cy.get("#accountFrm_accountguest").click({ force: true });
    cy.get('button[title="Continue"]').click({ force: true });
  }

  guestCheckoutConfirmation() {
    cy.get(".maintext").should(($maintext) => {
      expect($maintext.get(0).innerText.trim()).to.eq("CHECKOUT CONFIRMATION");
    });
  }

  clickConfirmOrder() {
    cy.get('button[title="Confirm Order"]').click({ force: true });
  }
}
