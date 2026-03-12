Cypress.on("window:before:load", (win) => {
  Object.defineProperty(win.navigator, "webdriver", {
    get: () => undefined,
  });
});