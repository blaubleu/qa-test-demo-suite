/// <reference types="Cypress" />

// testing search function

context ('finds search input field & accepts input', () => {

  it.only('accepts input', () => {
    const typedEntry = 'Nissan 370Z'

    cy.visit('http://demodt.cms.dealer.com/new-inventory/index.htm')
    cy.wait(3000)

    cy.get('.facetmulti').find('.facetmulti-form')
    cy.get('.facetmulti-form').find('.search').type(typedEntry)
      .should('have.value', typedEntry).click()
  })

})
