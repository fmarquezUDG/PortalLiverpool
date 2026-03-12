Feature: Agregar producto al carrito

  Background:
    Given el usuario está en la página principal de Liverpool

  Scenario: Verificar que el ícono del carrito es visible
    Then el ícono del carrito debe estar visible en la página

  Scenario: Agregar el primer producto de búsqueda al carrito
    When el usuario busca "audífonos"
    And selecciona el primer producto de los resultados
    Then el producto debe mostrarse en la página de detalle
    And el precio del producto debe ser visible
    And el usuario agrega el producto a la bolsa
    Then el producto debe agregarse exitosamente a la bolsa
    And navegamos a la bolsa

  Scenario: Eliminar un producto del carrito
    When el usuario busca "audífonos"
    And selecciona el primer producto de los resultados
    Then el producto debe mostrarse en la página de detalle
    And el precio del producto debe ser visible
    And el usuario agrega el producto a la bolsa
    Then el producto debe agregarse exitosamente a la bolsa
    And navegamos a la bolsa
    And eliminamos el producto del carrito
    And confirmamos la eliminación del producto del carrito
    Then se eliminaron los articulos de la bolsa

