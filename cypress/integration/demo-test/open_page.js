/// <reference types="Cypress" />

// testing URL construct

/*
context('Open page', () => {
  it('404 - incorrect URL construct', () => {
    cy.visit('https://demodt.cms.dealer.com/new-inventory.htm')
  }) 
})
*/

// testing header elements

context('Navigate to page', () => {

  it('page loads', () => {
    cy.visit('http://demodt.cms.dealer.com/new-inventory/index.htm')
    cy.wait(3000)
  })

  it ('logo loads', () => {
    // verify that logo leads to Index page
    cy.get('.header-default').find('.home-logolink').should('have.attr', 'href', '/')
  })

  it('dealership name loads', () => {
    cy.contains('h1','Demo')
  })

  it('navigation bar loads and navigates to CPO page', () => {
    // verify that a second inventory page is present
    context('Navigation', () => {
        cy.get('.navbar').contains('Pre-').click()
        cy.get('.dropdown-menu').contains('Certified').click()
      })
    })

  it('return to new inventory page', () => {
    cy.location('pathname').should('include', 'certified')

    cy.go('back')
    cy.location('pathname').should('not.include', 'certified')
  })

  it('login access', () => {
    // verify that users can login
    cy.contains('Log').should('have.attr', 'href', '#login')
  })

})

