const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Entry } = require('selenium-webdriver/lib/logging');
 

 var builder = new webdriver.Builder();
 var options = new chrome.Options();
 var prefs = new webdriver.logging.Preferences();

 prefs.setLevel(webdriver.logging.Type.BROWSER,webdriver.logging.Level.WARNING);
options.setLoggingPrefs(prefs);

  var driver = builder.forBrowser(webdriver.Browser.CHROME).setChromeOptions(options).build();

 async function example() {

 await driver.get("https://www.ajio.com/");

 var results;
var res = await driver.manage().logs().get(webdriver.logging.Type.BROWSER)

.then(function(entries) {
    entries.forEach(function(entry) {

      results = ('[%s] %s', entry.level.name, entry.message);
    // console.log(results,'results')
    });

 });
await driver.executeScript('alert("' + results +'")');
//await driver.quit();
}
example()