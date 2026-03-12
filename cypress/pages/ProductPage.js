class ProductPage {
  getProductTitle() {
    return cy.get('h1[class*="title"], h1[class*="product-name"], h1').first();
  }

  getPrice() {
    return cy.get('[class*="price"]:not([class*="original"]):not([class*="was"])').first();
  }

  addToCart() {
    cy.contains("button", /agregar al carrito|añadir al carrito/i)
      .first()
      .click({ force: true });
  }

  selectSize(size) {
    cy.contains('[class*="size"], [class*="talla"]', size)
      .first()
      .click({ force: true });
  }

  verifyAddedToCartConfirmation() {
    cy.get('[class*="modal"], [class*="toast"], [class*="notification"]', { timeout: 8000 })
      .should("be.visible");
  }

  addToBolsa() {
  cy.get('#opc_pdp_addCartButton', { timeout: 10000 })
    .should("be.visible")
    .click({ force: true });
  }

  verifyAddedToBolsa() {
    cy.get('#opc_pdp_addCartButton', { timeout: 10000 })
      .should("not.be.disabled");
    cy.url().should("include", "liverpool.com.mx");
  }
}

module.exports = new ProductPage();