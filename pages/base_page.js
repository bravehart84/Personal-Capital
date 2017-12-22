var webdriver = require('selenium-webdriver');
var chrome= require('selenium-webdriver/chrome');
var arg= new chrome.Options();
arg.addArguments('disable-infobars');
var By= webdriver.By, until=webdriver.until;

var driver= this.driver =  new webdriver.Builder()
.forBrowser('chrome')
.setChromeOptions(arg)
.build();

  


 var BasePage=  function () {
   
     global.driver= driver;

 

   


    this.visit= function(url){
        return driver.get(url);
        
    }

    

 
   

 


this.navigateTo= function(ele) {
driver.wait(until.elementLocated(ele),5000);
      driver.findElement(ele).click();
        

    

  }


  this.write= function(ele1, txt1, ele2, txt2, ele3, txt3){
    driver.findElement(ele1).sendKeys(txt1);
   
    driver.findElement(ele2).sendKeys(txt2);
    
    driver.findElement(ele3).sendKeys(txt3 );

  }

  this.quitBrowser= function(){
    driver.sleep(5000);
      driver.quit();
  }

}

 







module.exports = BasePage;