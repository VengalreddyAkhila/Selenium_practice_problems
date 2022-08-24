
const assert = require('assert')
const { Given, When, Then} =  require('@cucumber/cucumber')
const { Builder,By } = require('selenium-webdriver');
const TableData = require('../../../src/app');
const { getTabledata } = require('../../../src/app');
//const { AfterAll } = require('@cucumber/cucumber');

let results = []

const driver = new Builder().forBrowser('chrome').build();

Given('navigate to url',{ timeout: 20000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(TableData.url);
  });


When('get the data through elements', async function () {
 
  results = await getTabledata(driver,By)
  });

Then('see the result in console', function () {
    // Write code here that turns the phrase above into concrete actions
console.log(results)
  });

  
//   AfterAll('end', async function () {
//     await driver.quit();
//   });