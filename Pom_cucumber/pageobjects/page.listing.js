const Page = require('../pageobjects/homepage');
const App = require('../src/app')


class Pagelisting extends Page {

    // InputText(driver,By){
    //    driver.findElement(App.input)
     
    // }

    dropdownlisting(driver,By){
        driver.findElement(App.dropdown).click();
        driver.findElement(App.option).click();
         driver.findElement(App.inputsearch).click();
    }

    searchresults(driver,By){
      driver.findElement(App.searchresults);

    }

}

module.exports = new Pagelisting();