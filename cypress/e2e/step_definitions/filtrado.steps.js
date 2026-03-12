import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchPage from "../../pages/SearchResultsPage";

Then("la categoría activa debe mostrar {string}", (categoria) => {
  searchPage.verifyActiveCategory(categoria); 
});

When("el usuario selecciona la categoría de {string}", (categoria) => {
  searchPage.selectCategoryFromSidebar(categoria);
});
