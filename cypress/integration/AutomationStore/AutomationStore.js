/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import ProductCategoryPage from "../../support/pageObjects/productCategoryPage";
import CheckoutPage from "../../support/pageObjects/checkoutPage";
import GuestCheckoutPage from "../../support/pageObjects/guestCheckoutPage";

const homePage = new HomePage();
const productCategoryPage = new ProductCategoryPage();
const checkoutPage = new CheckoutPage();
const guestCheckoutPage = new GuestCheckoutPage();

beforeEach(() => {
  window.sessionStorage.clear();
});

Given("I am on Automation test store home page", () => {
  homePage.openBaseUrl(Cypress.config().baseUrl);
});

When("I select {string} from home page", (product) => {
  homePage.selectProduct(product);
});

Then("I have displayed with {string} products to select", (totalnumber) => {
  productCategoryPage.getTotalProductCount().should("have.length", totalnumber);
});

And("I opened {string} details", (item) => {
  homePage.selectitemFromProduct(item);
});

And("I add category item to the cart", () => {
  productCategoryPage.clickAddToCartButton();
});

And("I checkout from shopping cart", () => {
  checkoutPage.clickCheckoutButton();
});

And("I choose guest checkout option to continue", () => {
  guestCheckoutPage.selectGuestAndContinue();
});

And("I filled details and click continue", () => {
  cy.fillForm();
});

Then("I am displayed with check out confirmation details", () => {
  guestCheckoutPage.guestCheckoutConfirmation();
});

And("I clicked confirm order", () => {
  guestCheckoutPage.clickConfirmOrder();
});

And("I see message {string}", (message) => {
  checkoutPage.orderConfirmation(message);
});

And("I added multiple items {string} to the cart", (items) => {
  const itemsToAdd = items.split(',');
  itemsToAdd.forEach(
    item => productCategoryPage.addToCart(item))
});

And("I am on shopping cart", () => {
  homePage.clickOnCart();
});

And("Total amount displayed is same as {string}", (expectedTotalAmount) => {
  checkoutPage.verifyTotalAmount(expectedTotalAmount)
});