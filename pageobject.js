import {Given,When, Then,And} from "cypress-cucumber-preprocessor/steps";

import Loginpage from './loginpage'

    Given ("open the application", ()=>{
       //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       Loginpage.visit()
    
    })
    Then ("Enter the username and password", ()=>{

        // xpath //*[@name="username"]
        // NTh value 
          
        //cy.get ('div>input.oxd-input.oxd-input--active').eq(0).type('Admin')
           //cy.get('div').find('>input[name=username]').eq(0).type('Admin')
           //cy.get("[placeholder='Username']").eq(0).type('Admin')
          // cy.get('.oxd-input.oxd-input--active').eq(0).type('Admin')

         // cy.get('[type="password"]').type('admin123')
        //Loginpage.enterusername('username')
        Loginpage.enterusername('mercury')
        Loginpage.enterpassword('password')
    
    })
    Then ("click login button",()=>{
        //cy.get('[type="submit"]').click();
        Loginpage.clicksubmit()
    })
    Then ("validate the current page",()=>{
        cy.contains('Login Successfully')
       // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    })