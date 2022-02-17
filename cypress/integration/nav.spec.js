/// <reference types="cypress" />

describe('Navigation', () => {
  it('Should navigate to the test method view', () => {
    // navigate to the homepage
     cy.visit('/');
    // check that the "Welcome to the-internet" heading is there
    expect(cy.contains('Welcome to the-internet')).to.exist;
    
    
  });
});
