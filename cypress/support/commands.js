Cypress.Commands.add("login", (userName, password) => {
    cy.session([userName, password], () => {
        cy.visit('/', { failOnStatusCode: false })
        cy.get('#user-name')
            .should('be.visible')
            .type(userName)
        cy.get('#password')
            .should('be.visible')
            .type(password)
        cy.get('#login-button')
            .click()
        
    })
})
