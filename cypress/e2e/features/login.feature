Feature: Inicio de sesión en Liverpool

  Background:
    Given el usuario navega a la página de login de Liverpool

  Scenario: Verificar que el formulario de login está visible
    Then el campo de correo electrónico debe estar visible
    And el campo de contraseña debe estar visible

  Scenario: Crear una cuenta nueva en Liverpool
    Given el usuario navega a la página de login de Liverpool
    When el usuario hace clic en crear cuenta
    And el usuario ingresa un correo autogenerado
    And el usuario ingresa la contraseña "Mexico01."
    And el usuario hace clic en el botón crear cuenta
    Then el formulario de datos personales debe estar visible
    When el usuario llena los datos personales
    Then la cuenta debe crearse exitosamente

  Scenario: Login con credenciales inválidas
    When el usuario ingresa un correo autogenerado
    And el usuario ingresa la contraseña "Mexico01."
    And el usuario hace clic en iniciar sesión
    Then se debe mostrar un mensaje de error de autenticación

