// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("fillForm", () => {
  cy.get('input[name="firstname"]')
    .invoke("attr", "value", "test")
    .get('input[name="lastname"]')
    .invoke("attr", "value", "test")
    .get('input[name="email"]')
    .invoke("attr", "value", "test@gmail.com")
    .get('input[name="address_1"]')
    .invoke("attr", "value", "45 LONDON STREET")
    .get('input[name="city"]')
    .invoke("attr", "value", "LONDON")
    .get('select[name="zone_id"]')
    .select("Berkshire")
    .get('input[name="postcode"]')
    .invoke("attr", "value", "BB3 4CD")
    .get('button[title="Continue"]')
    .click({ force: true });
});
