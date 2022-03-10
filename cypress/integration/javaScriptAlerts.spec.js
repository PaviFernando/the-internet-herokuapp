/// <reference types="cypress" />


describe("javascript_alerts", () => {
  beforeEach(() => {
         cy.visit('/javascript_alerts');


  }); 

// Click for JS Alert 
  it("Verifiy JS Alert  ", () => {
    expect(cy.contains('JavaScript Alerts')).to.exist; 
   cy.get(':nth-child(1) > button').contains('Click for JS Alert').click();

   cy.on('window:alert', (text) => {
      expect(text).to.contains('I am a JS Alert');
    });

});

// Click for JS Confirm 
  it("Verifiy JS Confirm  ", () => {
    expect(cy.contains('JavaScript Alerts')).to.exist; 
   cy.get(':nth-child(2) > button').contains('Click for JS Confirm').click();

   cy.on('window:alert', (text) => {
      expect(text).to.contains('I am a JS Confirm');

         // verify application message on Cancel button click
      cy.get('#result').should('have.text', 'You clicked: Cancel')
    });
  
});


// Click for JS prompt 
  it("Verifiy JS prompt  ", () => {
    expect(cy.contains('JavaScript Alerts')).to.exist; 
   cy.get(':nth-child(3) > button').contains('Click for JS Prompt').click();

   cy.on('window:alert', (text) => {
      expect(text).to.contains('I am a JS prompt');
    });
  
});


});