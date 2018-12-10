/// <reference types="Cypress" />

// testing user actions

context ('User actions', () => {
  beforeEach(() => {
    cy.visit('http://demodt.cms.dealer.com/new-inventory/index.htm')
    cy.wait(3000)
  })

  // The following methods will remain in the first element of our product list and navigate throught its actions 

  it('click Save this Car', () => {
    cy.get('.hproduct').eq(0).within(($hproduct) => {
      cy.get('.mycars-save-btn').click()
    })
  })

  it('click Get Pre qualified', () => {
      cy.get('.hproduct').eq(0).within(($hproduct) => {
        cy.get('.financeButtonListing').click()
      })
  })
})