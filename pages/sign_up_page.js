var webdriver = require('selenium-webdriver');
var By= webdriver.By, Key= webdriver.Key;
 
var SignUpPage= require('./base_page.js');
  
 

 


SignUpPage.prototype.fillForm = function() {

    this.write(By.id("username"),"adeige88@gmail.com",By.id("passwd"),"adegboyega",By.id("phoneNumber"),"4156700196"+Key.TAB+ " "  );
   
};




module.exports = SignUpPage;