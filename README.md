# PortalLiverpool - Automatización de Pruebas

Proyecto de automatización de pruebas E2E para [Liverpool](https://www.liverpool.com.mx) usando Cypress con enfoque BDD y patrón de diseño Page Object Model (POM).

---

## Tecnologías utilizadas

| Herramienta | Versión |
|---|---|
| Cypress | 15.x |
| Node.js | 22.x |
| @badeball/cypress-cucumber-preprocessor | latest |
| multiple-cucumber-html-reporter | latest |
| Lenguaje | JavaScript |

---

## Estructura del proyecto
```
PortalLiverpool/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── busqueda.feature
│   │   │   ├── filtrado.feature
│   │   │   ├── carrito.feature
│   │   │   └── login.feature
│   │   └── step_definitions/
│   │       ├── common.steps.js
│   │       ├── busqueda.steps.js
│   │       ├── filtrado.steps.js
│   │       ├── carrito.steps.js
│   │       └── login.steps.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── SearchResultsPage.js
│   │   ├── ProductPage.js
│   │   ├── CartPage.js
│   │   └── LoginPage.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── generate-report.js
├── custom-style.css
└── package.json
```

---

## Casos de prueba

### 1. Busqueda por categorias (busqueda.feature)
- Navegar a categorías principales desde el menú
- Navegar a subcategorías mediante hover
- Validar título de categoría seleccionada

### 2. Filtrado de productos (filtrado.feature)
- Filtrar productos por categoría del menú lateral
- Validar que el título de categoría coincide con el filtro aplicado
- Verificar que hay productos visibles

### 3. Carrito de compras (carrito.feature)
- Buscar producto y seleccionar el primero
- Agregar producto a la bolsa
- Verificar icono del carrito
- Eliminar producto del carrito y confirmar

### 4. Login y registro (login.feature)
- Crear cuenta nueva con datos aleatorios
- Login con credenciales inválidas (validar mensaje de error)
- Verificar visibilidad del formulario de login

---

## Instalación
```bash
# Clonar el repositorio
git clone https://github.com/fmarquezUDG/PortalLiverpool.git

# Entrar al proyecto
cd PortalLiverpool

# Instalar dependencias
npm install
```

---

## Ejecución
```bash
# Abrir Cypress en modo interactivo (el reporte se genera al cerrar)
npm run cypress:open

# Ejecutar pruebas en modo headless (el reporte se genera al terminar)
npm run cypress:run

# Ejecutar pruebas en Chrome con ventana visible (el reporte se genera al terminar)
npx cypress run --browser chrome --headed
```

El reporte HTML se genera automaticamente al finalizar cualquier ejecucion, sin necesidad de comandos adicionales. El archivo se abre en el navegador al terminar y queda guardado en `cypress/reports/html/index.html`.

---

## Reporte

El reporte HTML se genera automaticamente en:
```
cypress/reports/html/index.html
```

Incluye:
- Dashboard con resumen de ejecucion
- Estado por feature y scenario
- Duracion de cada step
- Informacion del sprint y ambiente

---

## Patrones de diseno

- **Page Object Model (POM):** Toda la logica de selectores y acciones esta encapsulada en clases dentro de `cypress/pages/`
- **BDD con Gherkin:** Los escenarios estan escritos en lenguaje natural en archivos `.feature`
- **Steps compartidos:** Los steps reutilizables viven en `common.steps.js`

---

## Autor

Angel - QA Analyst
Proyecto: ATV03 | Sprint ATV03-2
Universidad de Guadalajara