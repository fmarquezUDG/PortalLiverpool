class CartPage {
  visit() {
    cy.visit("/tienda/cart");
  }

  getCartItems() {
    return cy.get('[class*="cart-item"], [class*="CartItem"]');
  }

  getCartIcon() {
    return cy.get('[class*="cart-icon"], [aria-label*="carrito"], [href*="cart"]').first();
  }

  clickCartIcon() {
    cy.get('button.a-header__bag', { timeout: 10000 })
      .first()
      .click({ force: true });
}

  removeFirstItem() {
    cy.get('[class*="remove"], [aria-label*="eliminar"], button[class*="delete"]')
      .first()
      .click({ force: true });
  }

  getCartTotal() {
    return cy.get('[class*="total"], [class*="Total"]').first();
  }

  verifyCartIsEmpty() {
    cy.contains(/carrito vacío|tu carrito está vacío/i).should("be.visible");
  }
}

module.exports = new CartPage();