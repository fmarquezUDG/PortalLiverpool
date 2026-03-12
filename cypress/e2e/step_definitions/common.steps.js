import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/HomePage";
import searchPage from "../../pages/SearchResultsPage";

Given("el usuario está en la página principal de Liverpool", () => {
  homePage.visit();
  homePage.acceptCookies();
});

When("el usuario busca {string}", (term) => {
  if (term !== "") {
    homePage.searchFor(term);
  }
});

When("el usuario selecciona la categoría {string}", (categoria) => {
  cy.get('[data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label"]', { timeout: 10000 })
    .contains(categoria)
    .click({ force: true });
  cy.wait(5000);
});


Then("debe haber al menos un producto visible", () => {
  searchPage.getResults().should("have.length.greaterThan", 0);
});

Then("debe haber al menos una subcategoria visible", () => {
  cy.get(
    '[class*="product"], [class*="container_grid"], [class*="container_promo"], [class*="banner_promo"], a[href*="/tienda/"]',
    { timeout: 10000 }
  ).should("have.length.greaterThan", 0);
});