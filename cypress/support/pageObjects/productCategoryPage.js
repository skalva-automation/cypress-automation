import BasePage from "../../support/pageObjects/basePage";

export default class ProductCategoryPage extends BasePage {
  constructor() {
    super();
  }

  getTotalProductCount() {
    return cy.get(".list-inline").find(".prdocutname");
  }

  clickAddToCartButton() {
    cy.get(".productpagecart").find(".cart").click({ force: true });
  }

  addToCart(itemName) {
    cy.get(`a[title*="${itemName}"]`)
      .closest('.fixed_wrapper')
      .next()
      .find('a[title*="Add to Cart"] i')
      .click({ force: true, timeout: 10000});
  }
}
