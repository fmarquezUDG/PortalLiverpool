const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json",
  reportPath: "cypress/reports/html",

  pageTitle: "Liverpool QA Report",

  reportName: "Liverpool - Portal de Pruebas Automatizadas",

  customStyle: "./custom-style.css",

  openReportInBrowser: true,

  displayDuration: true,
  displayReportTime: true,

  metadata: {
    browser: { name: "chrome", version: "124" },
    device: "Local",
    platform: { name: "Windows", version: "11" },
  },

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