/// <reference types="cypress" />


describe("key_presses?", () => {
  beforeEach(() => {
         cy.visit('/key_presses?');


  }); 

// Click for Key Pressess 
  it("Verifiy Key Pressess ", () => {
   
    expect(cy.contains('Key Presses')).to.exist; 
    cy.get('#target').type('{backspace}');
    cy.get('#result').contains('You entered: BACK_SPACE');
    
 });
 });
