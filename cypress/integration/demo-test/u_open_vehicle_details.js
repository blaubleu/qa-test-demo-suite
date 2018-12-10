/// <reference types="Cypress" />

// testing navigation to vehicle details page

context ('open vehicle details page', () => {
  beforeEach(() => {
    cy.visit('http://demodt.cms.dealer.com/new-inventory/index.htm')
    cy.wait(3000)
  })

  // open vehicle details page for the first element in our inventory list

  it('leads to vehicle details page', () => {
    cy.get('.inventoryList').find('.hproduct').eq(0).within(($hproduct) => {
      cy.get('h3').click()
    })
  })

  it('return to new inventory listings page', () => {
    cy.location('pathname').should('include', 'new')

    cy.go('back')
    cy.location('pathname').should('not.include', '2018')
  })

})