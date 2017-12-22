
var HomePage = require('./base_page.js');
var webdriver = require('selenium-webdriver');
var assert= require('chai').assert;
var By= webdriver.By;


        
    
HomePage.prototype.visit= function(homeurl){
    this.visit(homeurl);
}


HomePage.prototype.navigate_To_Financial_Tools= function(){
    this.navigateTo(By.xpath(".//*[text()='FINANCIAL TOOLS']"));
    
        

}

HomePage.prototype.quitBrowser= function(){
    this.quitBrowser();
}
    

 
   

 









module.exports = HomePage;
