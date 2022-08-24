const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const logBrowserMessages = require('selenium-webdriver/chrome');

async function run() {
  var logBrowserMessages = function(logEntries, driver, logging, cb) {
 driver.get("https://www.ajio.com/");
    return driver.manage().logs().get(logging.Type.BROWSER).then(function(entries) {
        entries.forEach(function(entry) {
            logEntries = logEntries + entry.level.name + ': ' + entry.message + '\n';
        });
        logEntries = logEntries + "\n";

        console.log(logs)
        console.log('final entries:' + logEntries);
        return cb();
    });
};
}

run();