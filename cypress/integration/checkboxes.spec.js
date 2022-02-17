/// <reference types="cypress" />

describe('Navigation', () => {
  it('Verify the checkbox', () => {
    // navigate to the checkbox
     cy.visit('/checkboxes');
    
    cy.get('input').eq(0).as('input0').check()
    cy.get('input0').should('be.checked')

    cy.get('input').eq(1).as('input1').uncheck()
    cy.get('input1').should('not.be.checked')
    
  });
});