

/***************************************************/

// Import the `defineConfig` function from Cypress
const { defineConfig } = require("cypress");

// Export the Cypress configuration using the defineConfig function
module.exports = defineConfig({

  // https://docs.cypress.io/guides/references/configuration

  // Set environment variables, in this case, the URL of the application under test
  env: {
    application_URL: 'https://www.saucedemo.com'
  },

  // Set the default viewport dimensions
  viewportHeight: 760,
  viewportWidth: 1100,

  // Set the number of retries for failed tests
  retries: 1, 

  // Enable video recording of test runs and compress the video
  video: true,
  videoCompression: true,
  
  // Configure the Mochawesome reporter for generating test reports
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/sauce-demo-ui-tests-report',
    charts: true,
    reportPageTitle: 'Sauce Demo UI Tests',
    embeddedScreenshots: true,
    inlineAssets: true,    
    overwrite: true,
    autoOpen: false,
    code: true,
    timestamp: 'longDate',
    showPassed: true,
    saveAllAttempts: false,
  },

  //chromeWebSecurity:false,

  

  // Setup Node events for Cypress (in this case, use the mochawesome reporter plugin)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
