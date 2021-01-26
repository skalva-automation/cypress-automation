export default class BasePage {
  openBaseUrl(baseUrl) {
    cy.visit(baseUrl)
      .title()
      .should("eq", "A place to practice your automation skills!");
  }
}
