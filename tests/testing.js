
    
var webdriver = require('selenium-webdriver');
//var chrome= require('selenium-webdriver/chrome');
HomePage = require('../pages/homepage.js');
var FinancialPage = require('../pages/financial_Tools_Page.js');
var SignUpPage = require('../pages/sign_up_page.js');



var test = require('selenium-webdriver/testing');


var driver;

   var homepage = new HomePage();

   var financialpage = new FinancialPage();

   

   

   var sign_up_page = new SignUpPage(driver);





  //var assert = require('assert');

const mochaTimeOut = 70000; //ms
 
test.describe('Regression Suite', function() {

  test.before(function(){

    this.timeout(mochaTimeOut);
    
     homepage.visit(" https://www.personalcapital.com/");  
       
    });
  
  test.it('Sign up for Personal Capital', function (done) {

    this.timeout(mochaTimeOut);

    homepage.navigate_To_Financial_Tools();

   

    console.log("navigated to financial tools");
    

     financialpage.clickSignUpLink();

    sign_up_page.fillForm();

    done();

    
 
    

    

   

   });

  test.after(function(){
    this.timeout(mochaTimeOut);

     homepage.quitBrowser();
       
    });




    

  });

  