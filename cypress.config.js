const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const report = require("multiple-cucumber-html-reporter");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.liverpool.com.mx",
    specPattern: "cypress/e2e/features/**/*.feature",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Generar reporte automáticamente
      on("after:run", () => {
        report.generate({
          jsonDir: "cypress/reports/cucumber-json",
          reportPath: "cypress/reports/html",
          pageTitle: "Liverpool QA Report",
          reportName: "Liverpool - Portal de Pruebas Automatizadas",
          openReportInBrowser: true,
          displayDuration: true,
          displayReportTime: true,
          customStyle: path.join(__dirname, "custom-style.css"),
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
              { label: "Ciclo", value: "Sprint ATV03-2" },
              { label: "Ejecutado por", value: "Angel" },
              { label: "Ambiente", value: "UAT" },
              { label: "URL", value: "https://www.liverpool.com.mx" },
            ],
          },
        });
      });

      return config;
    },
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
});