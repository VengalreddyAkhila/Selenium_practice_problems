const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
 

 var builder = new webdriver.Builder();
 var options = new chrome.Options();
 var prefs = new webdriver.logging.Preferences();

 prefs.setLevel(webdriver.logging.Type.BROWSER,webdriver.logging.Level.ALL);
options.setLoggingPrefs(prefs);

 driver = builder.forBrowser(webdriver.Browser.CHROME).setChromeOptions(options).build();


 var res = driver.get("https://www.ajio.com/").then(() =>
     driver.manage().logs().get(webdriver.logging.Type.BROWSER))
     .then((logs) => {
        console.log(logs);


    }).then(() => driver.quit());

//  //Click the link to activate the alert
//  driver.findElement(By.linkText('See an example alert')).click();

// // Wait for the alert to be displayed
// driver.wait(until.alertIsPresent());

// // Store the alert in a variable
// let alert =  driver.switchTo().alert();

// //Store the alert text in a variable
// let alertText =  alert.getText();

// //Press the OK button
//  alert.accept();



     


// async function run() {
//   var logBrowserMessages = function(logEntries, driver, logging, cb) {
//     return driver.manage().logs().get(logging.Type.BROWSER).then(function(entries) {
//         entries.forEach(function(entry) {
//             logEntries = logEntries + entry.level.name + ': ' + entry.message + '\n';
//         });
//         logEntries = logEntries + "\n";
//         console.log('final entries:' + logEntries);
//         return cb();
//     });
// };
// }

// run();