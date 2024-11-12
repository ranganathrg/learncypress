const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://nopensource-demo.orangehrmlive.com",
    rretries:{openMode: 1},
    "video":true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
