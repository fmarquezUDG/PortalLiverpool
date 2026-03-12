// Datos aleatorios
const nombres = ["Carlos", "Luis", "Miguel", "Jorge", "Diego", "Fernando", "Ricardo", "Eduardo"];
const apellidosP = ["García", "Martínez", "López", "Hernández", "Pérez", "González", "Ramírez", "Torres"];
const apellidosM = ["Ruiz", "Flores", "Cruz", "Morales", "Reyes", "Jiménez", "Vargas", "Castro"];
const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randNum = (min, max) => String(Math.floor(Math.random() * (max - min + 1)) + min);

class LoginPage {
  visit() {
    cy.visit("/");
    cy.get('[data-testid="blt26617d4f2e17657d-header-menu-dropdown-button"]', { timeout: 10000 })
      .click({ force: true });
    cy.wait(2000);
  }

  fillEmail(email) {
    cy.get('input[type="text"], input[type="email"], input[autocomplete*="email"], input[placeholder*="correo"], input[placeholder*="usuario"], input[placeholder*="email"]', { timeout: 10000 })
      .first()
      .clear()
      .type(email);
  }

  fillEmailAutogenerado() {
    const timestamp = Date.now();
    const email = `famarquezpogo+test${timestamp}@gmail.com`;
    cy.get('input[type="text"], input[type="email"], input[placeholder*="orreo"]', { timeout: 10000 })
      .first()
      .clear()
      .type(email);
  }

  fillPassword(password) {
    cy.get('input[type="password"]', { timeout: 10000 })
      .first()
      .clear()
      .type(password);
  }

  submit() {
    cy.get('button[type="submit"]').first().click({ force: true });
  }

  submitLogin() {
    cy.get('button[type="submit"]', { timeout: 8000 })
      .first()
      .click({ force: true });
  }

  clickCrearCuenta() {
    cy.get('a[href*="signup"]', { timeout: 10000 })
      .first()
      .click({ force: true });
    cy.wait(2000);
  }

  submitCrearCuenta() {
    cy.get('button[type="submit"], button[class*="submit"]', { timeout: 8000 })
      .first()
      .click({ force: true });
  }

  verifyFormularioDatosPersonales() {
    cy.contains(/Ingresa los siguientes datos|Nombre/i, { timeout: 10000 })
      .should("be.visible");
  }

  fillDatosPersonales() {
    const nombre = rand(nombres);
    const apellidoP = rand(apellidosP);
    const apellidoM = rand(apellidosM);
    const dia = randNum(1, 28);
    const mes = rand(meses);
    const anio = randNum(1970, 2000);

    cy.log(`Registrando: ${nombre} ${apellidoP} ${apellidoM} — ${dia}/${mes}/${anio}`);

    cy.get('input[id*="input-user__name"]', { timeout: 10000 })
      .first().clear().type(nombre);

    cy.get('input[id*="input-user__apaterno"]', { timeout: 10000 })
      .first().clear().type(apellidoP);

    cy.get('input[id*="input-user__amaterno"]', { timeout: 10000 })
      .first().clear().type(apellidoM);

    cy.get('select[name*="day"], select[name*="dia"], select[id*="day"]', { timeout: 10000 })
      .first().select(dia);

    cy.get('select[id="monthSelectorLabel"]', { timeout: 10000 })
      .first().select(mes);

    cy.get('select[name*="year"], select[name*="ano"], select[id*="year"]', { timeout: 10000 })
      .first().select(anio);

    cy.contains('label, span', /Hombre/i)
      .first().click({ force: true });

    cy.get('button.a-btn.a-btn--primary', { timeout: 8000 })
      .contains("Crear cuenta")
      .click({ force: true });
  }

  verifyAccountCreated() {
    cy.url({ timeout: 15000 }).should("not.include", "signup");
  }

  getErrorMessage() {
    return cy.get('[class*="error"], [class*="alert"], [class*="Error"]', { timeout: 8000 }).first();
  }

  verifyLoginError() {
    this.getErrorMessage().should("be.visible");
  }

  verifyEmailVisible() {
    cy.get('input[type="text"], input[type="email"], input[autocomplete*="email"], input[placeholder*="correo"], input[placeholder*="usuario"], input[placeholder*="email"]', { timeout: 10000 })
      .first().should("be.visible");
  }

  verifyPasswordVisible() {
    cy.get('input[type="password"]', { timeout: 10000 })
      .first().should("be.visible");
  }
}

module.exports = new LoginPage();