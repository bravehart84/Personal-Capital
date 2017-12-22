var webdriver = require('selenium-webdriver');
var Homepage = require('./homepage.js');
var FinancialPage=  require('./base_page.js');
var By= webdriver.By;



 
  

    FinancialPage.prototype.clickSignUpLink = function() {
       this.navigateTo(By.className("track-join-now-cta rectangular-CTA-button orange space-right"));
    
}








module.exports = FinancialPage;