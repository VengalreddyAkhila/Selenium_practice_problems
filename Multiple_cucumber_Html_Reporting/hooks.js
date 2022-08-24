

const {BeforeAll,AfterAll} = require ('@cucumber/cucumber')
let driver


BeforeAll(async function () {
  driver = await new Builder().forBrowser("chrome").build();
  console.log('inside before ');
});


  AfterAll({ timeout: 100000 },async function () {
    return  await driver.quit();
  });