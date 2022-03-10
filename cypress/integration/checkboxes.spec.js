/// <reference types="cypress" />

describe('Checkboxes', () => {
  it('Verify the checkbox', () => {
    // navigate to the checkbox
     cy.visit('/checkboxes');
      //complete page screenshot with filename - Checkboxes
      cy.screenshot('Checkboxes')
    
    cy.get('input').eq(0).as('input0').check();
    cy.get('input0').should('be.checked')

    cy.get('input').eq(1).as('input1').uncheck()
    cy.get('input1').should('not.be.checked')
    
  });
});