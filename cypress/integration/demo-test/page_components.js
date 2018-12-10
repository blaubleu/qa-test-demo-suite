/// <reference types="Cypress" />

// testing page elements

context ('Verify inventory view', () => {
  beforeEach(() => {
    cy.visit('http://demodt.cms.dealer.com/new-inventory/index.htm')
    cy.wait(3000)
  })

  it('inventory list and product components load', () => {
    //navigate to child element
    cy.get('.inventoryList').find('.hproduct')
  })

  it('Year Brand Model and Trim load', () => {
    cy.contains('h3', 'Nissan')
    .its('length')
    .should('be.gt', 0)
  })

  it('vehicle description loads', () => {
    cy.get('.description')

    it('check description elements', () => {
      cy.get('.description>dl').then(($lis) => {
        //navigate to first child element
        expect($lis.eq(0)).to.contain('Engine')
      })
    })
  })
  
  it('pricing loads', () => {
    cy.get('.pricing')
    .its('length')
    .should('be.gt', 3)
  })

  it ('media loads', () => {
    cy.get('.hproduct').find('.media')
  })

  it ('CTAs load', () => {
    //verify that buttons are present for both my-cars actions and for financing application
    cy.get('.hproduct').find('.mycars-vlp')
    cy.get('.hproduct').find('.financeButtonListing')
  })

})