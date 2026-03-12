class SearchResultsPage {
  // Selectors
  get categoryButton() {
    return cy.get('[data-testid="blt26617d4f2e17657d-header-button-category"]', { timeout: 10000 });
  }

  get categoryLabels() {
    return cy.get('[data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label"]', { timeout: 10000 });
  }

  get subcategoryLinks() {
    return cy.get('[data-testid="blt26617d4f2e17657d-header-menu-categories-header-subcategory-title-href"]', { timeout: 10000 });
  }

  get categoryTitle() {
    return cy.get('h2.display, h1, h2', { timeout: 10000 }).first();
  }

  get productList() {
    return cy.get('ul.m-product__listingPlp li.m-product__card', { timeout: 10000 });
  }
  
  selectCategoryFromSidebar(categoria) {
  cy.get('span.a-category__listElement', { timeout: 10000 })
    .contains(categoria)
    .click({ force: true });
  cy.wait(5000);
  }

  openCategoryMenu() {
    this.categoryButton.click({ force: true });
    cy.wait(1000);
  }

  selectCategory(categoria) {
    this.categoryLabels
      .contains(categoria)
      .click({ force: true });
    cy.wait(5000);
  }

  hoverCategory(categoria) {
    this.categoryLabels
      .contains(categoria)
      .parents('a')
      .trigger("mouseenter", { force: true })
      .trigger("mouseover", { force: true })
      .trigger("mousemove", { force: true });
    cy.wait(2000);
  }

  selectSubcategory(subcategoria) {
    this.subcategoryLinks
      .contains(subcategoria)
      .click({ force: true });
    cy.wait(5000);
  }

  selectFirstProduct() {
    this.productList
      .first()
      .find('img')
      .click({ force: true });
    cy.wait(5000);
  }

  filterByCategory(category) {
    cy.get('.a-category__listElement')
      .contains(category)
      .click({ force: true });
  }

  filterByBrand(brand) {
    cy.contains('[class*="facet"], [class*="filter"]', brand, { matchCase: false })
      .first()
      .click({ force: true });
  }

  verifyCategoryTitle(titulo) {
    this.categoryTitle
      .should("be.visible")
      .and("contain.text", titulo.toUpperCase());
  }

  verifyActiveCategory(category) {
    cy.get('.a-category__listElement', { timeout: 10000 })
      .contains(category)
      .should("be.visible")
      .and("contain.text", category);
  }

  verifySubcategoryVisible() {
    cy.get('a[href*="/tienda/"]', { timeout: 10000 })
      .should("have.length.greaterThan", 0);
  }

  verifyResultsContain() {
    this.productList.should("have.length.greaterThan", 0);
  }

  getResults() {
    return this.productList;
  }

  getResultCount() {
    return cy.get('[class*="result-count"], [class*="ResultCount"], h1').first();
  }
}

module.exports = new SearchResultsPage();