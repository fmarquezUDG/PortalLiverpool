Feature: Filtrado de productos en resultados de búsqueda

  Background:
    Given el usuario está en la página principal de Liverpool
    And el usuario busca "zapatos"

    Scenario: Filtrar por categoría Zapatos
    When el usuario selecciona la categoría de "Zapatos"
    Then la categoría activa debe mostrar "Zapatos"
    And debe haber al menos un producto visible

    Scenario: Filtrar por categoría Mujer
    When el usuario selecciona la categoría de "Mujer"
    Then la categoría activa debe mostrar "Mujer"
    And debe haber al menos un producto visible

    Scenario: Filtrar por categoría Hombre
    When el usuario selecciona la categoría de "Hombre"
    Then la categoría activa debe mostrar "Hombre"
    And debe haber al menos un producto visible

