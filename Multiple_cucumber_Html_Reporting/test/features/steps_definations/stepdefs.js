const assert = require('assert')
const { Given, When, Then, BeforeAll } = require('@cucumber/cucumber');
const { By, Browser } = require('selenium-webdriver');
const App = require('../../../src/app')
let actualLoginUrl, Loginurl;
let expectedLoginUrl = 'https://www.ebay.com/sch/ebayadvsearch';
let expectedUrl = 'https://www.ebay.com/'

const { Builder } = require('selenium-webdriver');
const page = require('../../../src/app');
const { async } = require('regenerator-runtime');
const { Baseurl, Advancesearch, ebaylogo } = require('../../../pageobjects/adv.search');
const { InputText, dropdownlisting, searchresults } = require('../../../pageobjects/page.listing');




let driver

BeforeAll(async function () {
  driver = await new Builder().forBrowser("chrome").build();
  console.log('inside before ');
});


//   AfterAll({ timeout: 100000 },async function () {
//     return  await driver.quit();
//   });

//scenario :1

Given('I am on the ebay url', { timeout: 20000 }, async function () {
  await Baseurl(driver);
});

When('I click on the advanced search', { timeout: 20000 }, async function () {
  await Advancesearch(driver, By)
  await driver.sleep(2000);
  // actualLoginUrl = driver.getCurrentUrl();
  // console.log(actualLoginUrl, 'actualloginurl')
  // await assert.equal(expectedLoginUrl, actualLoginUrl);
});

Then('I see the ebay img and navigate to home page', { timeout: 20000 }, async function () {
  await driver.sleep(5000);
  await ebaylogo(driver, By);
  //await ebaylogo(driver,By)
  // Loginurl = await driver.getCurrentUrl();
  // await assert.equal(expectedUrl, Loginurl)
});

//scenario :2

Given('search the text in search bar {string}', { timeout: 20000 }, async function (searchText) {
  await driver.sleep(5000)
  await Baseurl(driver);
  let element = await driver.findElement(App.input);
  element.click();
  await element.sendKeys(searchText);
});

When('i click on dropdown and select options', { timeout: 20000 }, async function () {
  await driver.sleep(5000);
  await driver.findElement(App.dropdown).click();
  await driver.sleep(2000)
  await driver.findElement(App.option).click();
  await driver.findElement(App.inputsearch).click();
  // await dropdownlisting(driver,By)
});


Then('i see the message as succesfully found', { timeout: 20000 }, async function () {
  let results = await driver.findElement(App.searchresults);
  const resultdata = await results.getText();
  console.log(resultdata, 'successfully found')

});