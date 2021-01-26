import BasePage from "../../support/pageObjects/basePage";

export default class HomePage extends BasePage {
  constructor() {
    super();
  }

  selectProduct(product) {
    cy.get('a[href*="product/category"]')
      .contains(product)
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(href);
      });
  }

  selectitemFromProduct(product) {
    cy.get('a[href*="product/product"]')
      .contains(product)
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(href);
      });
  }

  clickOnCart() {
    cy.get('a[title="View Cart"]  .fa')
    .click({ force: true});
  }
}
