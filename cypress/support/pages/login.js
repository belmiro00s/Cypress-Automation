
class Login {

    login(email, password) {
        cy.session([email, password], () => {
            cy.visit('/', { failOnStatusCode: false })
            cy.get('#loginPanel')
                .should('be.visible')
                .get('input[name="username"]')
                .should('be.visible')
                .type(email)
                .get('input[name="password"]')
                .type(password)
                .should('be.visible')
            cy.url().should('include', '/overview.htm')
        })
    }
}

export default new Login()

