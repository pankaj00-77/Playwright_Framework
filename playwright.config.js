// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({// it will save our key value pairs into one variable 
  testDir: './tests',//to run a specific test file use ./tests/UIBasicTest.spec.js
    timeout:30*1000,//(it is applicable to every step )to specify the maximum amount of time  a certain operation or test to complete before failing it with a timeout error.
    expect:{
      timeout:4000,//it is applicable for assertion validatations 
    },
    reporter:'html',
  use: {
    browserName: 'chromium', //it use the chrome browser to run our test cases
    headless : false,
    screenshot: 'on', 
    trace: 'retain-on-failure',

  },

  
});

module.exports = config// by this it will available across the whole file or framework