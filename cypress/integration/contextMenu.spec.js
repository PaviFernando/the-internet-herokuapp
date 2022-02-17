/// <reference types="cypress" />


describe("context_menu", () => {
  beforeEach(() => {
         cy.visit('/context_menu');


  }); 
// Right click 
  it("Verifiy Right click ", () => {
    expect(cy.contains('Context Menu')).to.exist; 
   cy.get('#hot-spot').rightclick();
    
   cy.on('window:alert', (text) => {
    expect(text).to.contains('You selected a context menu');

   });
});
});