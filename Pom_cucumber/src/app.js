const { By, Key } = require('selenium-webdriver');

module.exports = {
  url: 'https://www.ebay.com/',
  input: By.name('_nkw'),
  advancesearch:By.id('gh-as-a'),
  ebaylogolink:By.css('#gh-la'),
  dropdown:By.id('gh-cat'),
  option:By.xpath('//*[@id="gh-cat"]/option[16]'),
  inputsearch:By.id('gh-btn'),
  searchresults:By.xpath('/html/body/div[5]/div[4]/div[1]/div/div[2]/div[1]/div[1]/h1')
};