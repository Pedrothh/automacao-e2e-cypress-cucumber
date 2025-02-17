const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { allureCypress } = require('allure-cypress/reporter');
const cypressSplit = require('cypress-split');

async function setupNodeEvents(cypressOn, config) {
  const on = require('cypress-on-fix')(cypressOn);

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  );
  allureCypress(on, config, {
    resultsDir: 'allure-results'
  });
  cypressSplit(on, config);
  config.defaultCommandTimeout = 4000;

  return config;
}

module.exports = defineConfig({
  trashAssetsBeforeRuns: false,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  screenshotOnRunFailure: true,
  video: true,
  retries: 1,
  defaultCommandTimeout: 4000,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  e2e: {
    specPattern: 'cypress/e2e/*.feature',
    setupNodeEvents
  }
});
