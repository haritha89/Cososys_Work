const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wnjr4a",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 120000, 
  },
});

