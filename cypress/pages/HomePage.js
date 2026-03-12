class HomePage {
  visit() {
    cy.visit("/");
  }

  searchFor(term) {
  cy.get('input[placeholder="Buscar por producto, categoría y más..."]', { timeout: 10000 })
    .first()
    .click()
    .clear()
    .type(term, { delay: 50 })
    .type("{enter}");
  }

  acceptCookies() {
    cy.get("body").then(($body) => {
      if ($body.find('[id*="cookie"], [class*="cookie"]').length > 0) {
        cy.get('[id*="cookie"] button, [class*="cookie"] button').first().click({ force: true });
      }
    });
  }
}

module.exports = new HomePage();