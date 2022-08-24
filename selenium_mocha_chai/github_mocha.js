// Include the chrome driver
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let driver = browser.forBrowser("chrome").build();

let { email, pass } = require("./credentials.json");
const { should } = require('chai').should();
let ClickSignIn;

describe("login page opens", function(){
	it("it works sucessfullly" , function (){

 let Baseurl =
	driver.get("https://github.com/");
	 Baseurl
	.then(function () {
		let findTimeOutP =
			driver.manage().setTimeouts({
				implicit: 20000,
			});
		return findTimeOutP;
	})
	.then(function () {
		let Username =
			driver.findElement(swd.By.id("login_field"));
		return Username;
	})
	.then(function (username) {
		let FillUsername =
			username.sendKeys(email);
		return FillUsername;
	})
	.then(function () {	
		let Password =
			driver.findElement(swd.By.id("password"));
		return Password;
	})
	.then(function (password) {

		let FillPassword =
			password.sendKeys(pass);
		return FillPassword;
	})
	.then(function () {
		let SignInBtn = driver.findElement(
			swd.By.name("commit")
		);
		return SignInBtn;
	})
	.then(function (signInBtn) {

		 ClickSignIn = signInBtn.click();
		return ClickSignIn;
	})

	.catch(function (err) {
		console.log("Error ", err, " occurred!");
	});
})


it("profile page opens",function(){

let profileurl = driver.get("https://github.com/login ");

ClickSignIn. should.equal(profileurl)

})
})