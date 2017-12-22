



var Basepage = require('./base_page.js');
var webdriver = require('selenium-webdriver');
var assert= require('chai').assert;
var By= webdriver.By;



class HomePage extends Basepage{


    navigate_To_Financial_Tools(){
             this.navigateTo(By.xpath(".//*[text()='FINANCIAL TOOLS']"));
             return require('./financial_Tools_Page.js');
            
                
        
         }
        
}
        
    

    

 
   

 









module.exports = HomePage;

  




    

 
   

 









module.exports = HomePage;
