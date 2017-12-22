var webdriver = require('selenium-webdriver');
var Basepage = require('./base_page.js');
var By= webdriver.By;



 class FinancialPage extends Basepage{

    clickSignUpLink(){
        this.navigateTo(By.className("track-join-now-cta rectangular-CTA-button orange space-right"));
         return require('./sign_up_page.js');

 }

}
  












module.exports = FinancialPage;
