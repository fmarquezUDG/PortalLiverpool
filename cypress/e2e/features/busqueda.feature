Feature: Búsqueda de productos por categoría en Liverpool

  Background:
    Given el usuario está en la página principal de Liverpool

  Scenario: Navegar a la categoría Zapatos
    When el usuario abre el menú de categorías
    And el usuario selecciona la categoría "Zapatos"
    Then la página de categoría debe mostrar el título "Zapatos"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la categoría Mujer
    When el usuario abre el menú de categorías
    And el usuario selecciona la categoría "Mujer"
    Then la página de categoría debe mostrar el título "Mujer"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la categoría Deportes
    When el usuario abre el menú de categorías
    And el usuario selecciona la categoría "Deportes"
    Then la página de categoría debe mostrar el título "Deportes"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la categoría Electrónica
    When el usuario abre el menú de categorías
    And el usuario selecciona la categoría "Electrónica"
    Then la página de categoría debe mostrar el título "Electrónica"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la categoría Juguetes
    When el usuario abre el menú de categorías
    And el usuario selecciona la categoría "Juguetes"
    Then la página de categoría debe mostrar el título "Juguetes"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la subcategoría Computación dentro de Electrónica
    When el usuario abre el menú de categorías
    And el usuario se posiciona sobre la categoría "Electrónica"
    And el usuario selecciona la subcategoría "Computación"
    Then la página de subcategoría debe mostrar el título "Computación"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la subcategoría Niñas dentro de Zapatos
    When el usuario abre el menú de categorías
    And el usuario se posiciona sobre la categoría "Zapatos"
    And el usuario selecciona la subcategoría "Niñas"
    Then la página de subcategoría debe mostrar el título "Niñas"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la subcategoría Ropa dentro de Hombre
    When el usuario abre el menú de categorías
    And el usuario se posiciona sobre la categoría "Hombre"
    And el usuario selecciona la subcategoría "Ropa"
    Then la página de subcategoría debe mostrar el título "Ropa"
    And debe haber al menos una subcategoria visible

  Scenario: Navegar a la subcategoría Perfumes dentro de Belleza
    When el usuario abre el menú de categorías
    And el usuario se posiciona sobre la categoría "Belleza"
    And el usuario selecciona la subcategoría "Perfumes"
    Then la página de subcategoría debe mostrar el título "Perfumes"
    And debe haber al menos una subcategoria visible


