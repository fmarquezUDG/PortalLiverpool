const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json",
  reportPath: "cypress/reports/html",

  // Título de la pestaña del navegador
  pageTitle: "Liverpool QA Report",

  // Título visible en el header del reporte
  reportName: "Liverpool - Portal de Pruebas Automatizadas",

  // Logo personalizado (URL o ruta local)
  customStyle: "./custom-style.css",

  // Abrir el reporte automáticamente al generarse
  openReportInBrowser: true,

  displayDuration: true,
  displayReportTime: true,

  // Datos del ambiente
  metadata: {
    browser: { name: "chrome", version: "124" },
    device: "Local",
    platform: { name: "Windows", version: "11" },
  },

  // Tabla de datos personalizados
  customData: {
    title: "Información del Sprint",
    data: [
      { label: "Proyecto", value: "PortalLiverpool" },
      { label: "Release", value: "1.0.0" },
      { label: "Ciclo", value: "Sprint 03-01" },
      { label: "Ejecutado por", value: "Angel" },
      { label: "Ambiente", value: "UAT" },
      { label: "URL", value: "https://www.liverpool.com.mx" },
    ],
  },
});