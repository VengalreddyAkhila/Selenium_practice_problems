const {Builder , By } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const driver =  new Builder().forBrowser("chrome").build();
 async function example() {
    let results = [];

    await driver.get("https://www.ajio.com/");
//await driver.findElements(By.className("menu-newlist").click())

//await driver.get("http://www.buaban.com/files/test-console.html");
var res = await driver.manage().logs().get(webdriver.logging.Type.BROWSER);
//console.error(res);

console.log(logs)
   // //await driver.setTimeout({implicit:15000, pageload:10000})
    // Wait for the alert to be displayed
await driver.wait(until.alertIsPresent());

// Store the alert in a variable
let alert = await driver.switchTo().alert();

//Store the alert text in a variable
let alertText = await alert.getText();

//console.log(alertText)

//Press the OK button
await alert.accept();
    }

    example()