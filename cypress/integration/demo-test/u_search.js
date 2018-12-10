/// <reference types="Cypress" />

// testing search function

context ('finds search input field, accepts input & yields results', () => {

  it.only('accepts input', () => {
    // value we will use to search for a given model is Nissan 370Z
    const typedEntry = 'Nissan 370Z'

    cy.visit('http://demodt.cms.dealer.com/new-inventory/index.htm')
    cy.wait(3000)

    // navigate to search element, input text, get results
    cy.get('.facetmulti').find('.facetmulti-form')
    cy.get('.facetmulti-form').find('.search').type(typedEntry)
      .should('have.value', typedEntry).click()
  })

})
