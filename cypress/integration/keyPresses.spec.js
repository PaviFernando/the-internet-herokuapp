/// <reference types="cypress" />


describe("key_presses?", () => {
  beforeEach(() => {
         cy.visit('/key_presses?');
          //complete page screenshot with filename - key_presses?
      cy.screenshot('key_presses?')
         // identify element
      cy.get('h1#headingText').find('span').then(function(e){
         const t = e.text()
         // assertion expect
         expect(t).to.contains('Welcome to the-internet')
      })


  }); 

// Click for Key Pressess 
  it("Verifiy Key Pressess ", () => {
   
    expect(cy.contains('Key Presses')).to.exist; 
    cy.get('#target').type('{backspace}');
    cy.get('#result').contains('You entered: BACK_SPACE');
    
 });
 });
