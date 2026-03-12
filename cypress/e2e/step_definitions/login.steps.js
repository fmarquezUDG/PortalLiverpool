import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/LoginPage";

Given("el usuario navega a la página de login de Liverpool", () => {
  loginPage.visit();
});
// Scenario: Verificar formulario visible
Then("el campo de correo electrónico debe estar visible", () => {
  loginPage.verifyEmailVisible();
});

Then("el campo de contraseña debe estar visible", () => {
  loginPage.verifyPasswordVisible();
});

// Scenario: Crear cuenta
When("el usuario hace clic en crear cuenta", () => {
  loginPage.clickCrearCuenta();
});

When("el usuario ingresa un correo autogenerado", () => {
  loginPage.fillEmailAutogenerado();
});

When("el usuario hace clic en el botón crear cuenta", () => {
  loginPage.submitCrearCuenta();
});

Then("el formulario de datos personales debe estar visible", () => {
  loginPage.verifyFormularioDatosPersonales();
});

When("el usuario llena los datos personales", () => {
  loginPage.fillDatosPersonales();
});

Then("la cuenta debe crearse exitosamente", () => {
  loginPage.verifyAccountCreated();
});

// Scenario: Login con credenciales inválidas
When("el usuario ingresa el correo {string}", (email) => {
  loginPage.fillEmail(email);
});

When("el usuario ingresa la contraseña {string}", (password) => {
  loginPage.fillPassword(password);
});

When("el usuario hace clic en iniciar sesión", () => {
  loginPage.submitLogin();
});

Then("se debe mostrar un mensaje de error de autenticación", () => {
  loginPage.verifyLoginError();
});

