import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/HomePage";
import searchPage from "../../pages/SearchResultsPage";
import productPage from "../../pages/ProductPage";
import cartPage from "../../pages/CartPage";

When("selecciona el primer producto de los resultados", () => {
  searchPage.selectFirstProduct();
});

Then("el producto debe mostrarse en la página de detalle", () => {
  productPage.getProductTitle().should("be.visible");
});

Then("el precio del producto debe ser visible", () => {
  productPage.getPrice().should("be.visible");
});

Then("el ícono del carrito debe estar visible en la página", () => {
  cartPage.getCartIcon().should("be.visible");
});

When("el usuario agrega el producto a la bolsa", () => {
  productPage.addToBolsa();
});

Then("el producto debe agregarse exitosamente a la bolsa", () => {
  productPage.verifyAddedToBolsa();
});

Then("navegamos a la bolsa", () => {
  cartPage.clickCartIcon();
});

Then("eliminamos el producto del carrito", () => {
  cy.get('img.a-header__strongLink[src*="icon-trash"]', { timeout: 10000 })
    .first()
    .click({ force: true });
  cy.wait(2000);
});

Then("confirmamos la eliminación del producto del carrito", () => {
  cy.get('div.modal-content', { timeout: 10000 })
    .should("be.visible");
  cy.get('div.modal-content button.a-btn--primary', { timeout: 10000 })
    .contains("Aceptar")
    .click({ force: true });
  cy.wait(2000);
});

Then("se eliminaron los articulos de la bolsa", () => {
  cy.get('div.m-mdc__snackbarLabel', { timeout: 10000 })
    .should("be.visible")
    .and("contain.text", "Se eliminaron artículos de tu bolsa.");
});