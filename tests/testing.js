
    
var webdriver = require('selenium-webdriver');

HomePage = require('../pages/homepage.js');
var FinancialPage = require('../pages/financial_Tools_Page.js');
var SignUpPage = require('../pages/sign_up_page.js');



var test = require('selenium-webdriver/testing');




   var homepage = new HomePage();

   var financialpage = new FinancialPage();

  var sign_up_page = new SignUpPage(driver);






  

const mochaTimeOut = 10000; 

 
 test.describe('Regression Suite', function() {

  test.before(function(){

    this.timeout(mochaTimeOut);
    
     homepage.visit(" https://www.personalcapital.com/");  
       
    });
  
  test.it('Sign up for Personal Capital', function () {

    this.timeout(mochaTimeOut);

   homepage.navigate_To_Financial_Tools();

   

    
    

    financialpage.clickSignUpLink();

    sign_up_page.fillForm();

    

     });

  test.after(function(){
    this.timeout(mochaTimeOut);

     homepage.quitBrowser();
       
    });




    

  });

  


    
 
    

    

   

   });

  test.after(function(){
    this.timeout(mochaTimeOut);

     homepage.quitBrowser();
       
    });




    

  });

  
