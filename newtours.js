import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ("Launch the application", ()=> {
    cy.visit("https://demo.guru99.com/test/newtours/")
});

When ("provide valid {string} and {string}", (username,password) =>{
cy.get('[name="userName"]').type(username);
cy.get('[name="password"]').type(password);
});

Then ("click the submit button", () =>{
  cy.get('[name="submit"]').click();
});

And ("Verify the {string}", (title) =>{
cy.url().should('eq',(title))

})




