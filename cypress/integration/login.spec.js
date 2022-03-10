/// <reference types="cypress" />


describe("Login page", () => {
  beforeEach(() => {
         cy.visit('/login');
          //complete page screenshot with filename - Login_page
      cy.screenshot('Login_page')

    
  }); 
  //part of before hook
   before(function(){
      //access fixture data
      cy.fixture('example').then(function(signInData){
         this.signInData = signInData
      })
   })

  
// Valid credentials
  it("Verifiy Login greeting", () => {
    expect(cy.contains('Login Page')).to.exist; 
    cy.get('#username').type(this.signInData.username);
    cy.get('#password').type(this.signInData.password);
    cy.get('.radius').contains('Login').click();
    cy.get('h2').should('have.text',' Secure Area');

    //logout 
    cy.get('.button').contains('Logout').click();

  });

//Invalid username

  it("Verify Invalid username", () => {
  
    expect(cy.contains('Login Page')).to.exist; 
    cy.get('#username').type(this.signInData.incorrect_username);
    cy.get('#password').type(this.signInData.password);
    cy.get('.radius').contains('Login').click();
    cy.get('#flash').contains('Your username is invalid!');
  });

//Invalid password  
  it("Verify Invalid password", () => {
    expect(cy.contains('Login Page')).to.exist; 
    cy.get('#username').type(this.signInData.username);
    cy.get('#password').type(this.signInData.incorrect_password);
    cy.get('.radius').contains('Login').click() ; 
    cy.get('#flash').contains('Your password is invalid!');
  });
  
});

