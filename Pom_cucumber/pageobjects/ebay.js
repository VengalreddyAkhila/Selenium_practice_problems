const Page = require('../pageobjects/homepage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
const App = require('../src/app')

class LoginPage extends Page {

   

    ebaylogo(driver, By) {
        driver.findElement(App.ebaylogolink).click();
    }

}
module.exports = new LoginPage();
