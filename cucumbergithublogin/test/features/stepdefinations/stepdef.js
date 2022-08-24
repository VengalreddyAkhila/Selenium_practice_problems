const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { Builder, By } = require('selenium-webdriver');
//const { getLoginData, getTitledata } = require('../../../src/app');
//const App = require('../../../src/app')
const { AfterAll, BeforeAll } = require("@cucumber/cucumber");
let driver, actualUrl, actualLoginUrl;
var expectedUrl = "https://github.com/VengalreddyAkhila";
var expectedLoginUrl = "https://github.com/"

let baseurl;


BeforeAll(async function () {
  driver = await new Builder().forBrowser("chrome").build();
  console.log('inside before ');
});


Given('Navigate to the github url', { timeout: 30000 }, async function () {
  await driver.get("https://github.com");
  await driver.findElement(By.xpath("/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a")).click();
});

When('i enter the username and password', async function () {
  logindetails = {
    email: 'akhila.it1801@gmail.com',
    pass: 'Akhil@55',
  }
  await driver.get("https://github.com/login");
  let username = await driver.findElement(By.xpath("//*[@id='login_field']"));
  let password = await driver.findElement(By.xpath("//*[@id='password']"));
  await username.sendKeys(logindetails.email);
  await password.sendKeys(logindetails.pass);
  await driver.findElement(By.xpath("//*[@id='login']/div[4]/form/div/input[12]")).click();

});

Then('i will logined successfully and navigate to home page', { timeout: 70000 }, async function () {
  await driver.findElement(By.xpath("//*[@id='login']/div[4]/form/div/input[12]")).click();
  await driver.sleep(30000);
  actualLoginUrl = await driver.getCurrentUrl();
  await assert.equal(expectedLoginUrl, actualLoginUrl);
});

Given('dropdown is selected', { timeout: 30000 }, async function () {
  await driver.sleep(3000);
  await driver.findElement(By.xpath("/html/body/div[1]/header/div[7]/details/summary/span[2]")).click();
});

When('your profile is clicked', { timeout: 30000 }, async function () {
  await driver.sleep(3000);
  await driver.findElement(By.xpath("/html/body/div[1]/header/div[7]/details/details-menu/a[1]")).click();
});
Then('redirect to user profile page', { timeout: 50000 }, async function () {
  await driver.sleep(40000);
  actualUrl = await driver.getCurrentUrl();
  await assert.equal(expectedUrl, actualUrl);
});



  // AfterAll({ timeout: 100000 },async function () {
  //   return  await driver.quit();
  // });