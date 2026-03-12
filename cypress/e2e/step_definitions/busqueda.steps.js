import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchPage from "../../pages/SearchResultsPage";

When("el usuario abre el menú de categorías", () => {
  searchPage.openCategoryMenu();
});

When("el usuario se posiciona sobre la categoría {string}", (categoria) => {
  searchPage.hoverCategory(categoria);
});

When("el usuario selecciona la subcategoría {string}", (subcategoria) => {
  searchPage.selectSubcategory(subcategoria);
});

Then("la página de categoría debe mostrar el título {string}", (titulo) => {
  searchPage.verifyCategoryTitle(titulo);
});

Then("la página de subcategoría debe mostrar el título {string}", (titulo) => {
  searchPage.verifyActiveCategory(titulo);
});