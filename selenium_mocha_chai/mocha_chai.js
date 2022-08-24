
chai = require('chai');

const { webdriver,By,Builder } = require("selenium-webdriver");
//var expect = chai.expect;
var should = require("chai").should();
let { email, pass } = require("./credentials.json");


let url;
let baseurl;

//describe block
describe("github page opens",function(){

    //it block
    it("succesfully opens github page",async function (){

         //launch the browser
    let driver =await new Builder().forBrowser("chrome").build();

    //navigate to the our application

     await  driver.get("https://github.com/");
     await driver.findElement(By.xpath("//*[@id='top']/body/div[1]/header/div/div[2]/div[2]/div[2]")).click();
     await driver.sleep(2000)
     url = await driver.getCurrentUrl()

 // url.should.equal("https://github.com/login")
    })

   it("opens login page", async function(){
    let driver =await new Builder().forBrowser("chrome").build();

    await  driver.get("https://github.com/login");
    let username = await driver.findElement(By.xpath("//*[@id='login_field']"));
    let password = await driver.findElement(By.xpath("//*[@id='password']"));
    await username.sendKeys(email);
    await password.sendKeys(pass);
    
     await driver.findElement(By.xpath("//*[@id='login']/div[4]/form/div/input[12]")).click();
     await driver.findElement(By.xpath("/html/body/div[1]/header/div[7]/details/summary/span[2]")).click();
     await driver.findElement(By.xpath("/html/body/div[1]/header/div[7]/details/details-menu/a[1]")).click();
    
    })
})


