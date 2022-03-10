/// <reference types="cypress" />

describe('Navigation', () => {
  it('Should navigate to the test method view', () => {
    // navigate to the homepage
     cy.visit('/');
      //complete page screenshot with filename - Navigation
      cy.screenshot('Navigation')
     
     

    // check that the "Welcome to the-internet" heading is there
    expect(cy.contains('Welcome to the-internet')).to.exist;
    
    
  });
});
