const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    rretries:{openMode: 1},
    "video":true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
