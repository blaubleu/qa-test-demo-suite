/// <reference types="Cypress" />

// testing page elements

context ('User actions', () => {
  beforeEach(() => {
    cy.visit('http://demodt.cms.dealer.com/new-inventory/index.htm')
    cy.wait(3000)
  })

  it('click Save this Car', () => {
    cy.get('.hproduct').eq(0).within(($hproduct) => {
      cy.get('.mycars-save-btn').click()
    })
  })

  it('click Get Preapproved', () => {
      cy.get('.hproduct').eq(0).within(($hproduct) => {
        cy.get('.financeButtonListing').click()
      })
  })
})