/// <reference types="cypress" />


describe("Login page", () => {
  beforeEach(() => {
         cy.visit('/login');

    
  }); 

 /* const invalidUsername = 'Wrong';
  const invalidPassword = 'invalid';
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';*/
  
// Valid credentials
  it("Verifiy Login greeting", () => {
    expect(cy.contains('Login Page')).to.exist; 
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').contains('Login').click();
    cy.get('h2').should('have.text',' Secure Area');

    //logout 
    cy.get('.button').contains('Logout').click();

  });

//Invalid username

  it("Verify Invalid username", () => {
  
    expect(cy.contains('Login Page')).to.exist; 
    cy.get('#username').type('tomsmith1');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').contains('Login').click();
    cy.get('#flash').contains('Your username is invalid!');
  });

//Invalid password  
  it("Verify Invalid password", () => {
    expect(cy.contains('Login Page')).to.exist; 
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!1');
    cy.get('.radius').contains('Login').click() ; 
    cy.get('#flash').contains('Your password is invalid!');
  });
  
});

