
const {Builder , By } = require("selenium-webdriver");

 async function example() {

    let driver = await new Builder().forBrowser("chrome").build();


         let BrowserName = (await driver.getSession()).getCapabilities().getBrowserName();
         let Version = (await driver.getSession()).getCapabilities().getBrowserVersion();
         let OperatingSystem = (await driver.getSession()).getCapabilities().getPlatform();

        console.log('BrowserName:',BrowserName)
        console.log("Version:",Version)
        console.log("OperatingSystem:",OperatingSystem)

    
}
example(); 