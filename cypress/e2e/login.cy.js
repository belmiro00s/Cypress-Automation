import loginData from '../fixtures/login.json'


describe('Login Functionality', () => {
    beforeEach(() => {
        Cypress.on("uncaught:exception", () => {
            return false;
        })   
    })

    it('Should login successfully going to home', () => {
        cy.login(loginData.user.userName, loginData.user.password)
        cy.get('h6.oxd-text--h6').as('TitlePageHome')
        .get('@TitlePageHome').should('have.text', 'Dashboard')
    })

    it('Should show an error message when entering invalid credentials', () => {
        const errorMessage = 'Epic sadface: Username and password do not match any user in this service'
        cy.login('invalidUser', 'invalidPass', true)
        cy.get('div.oxd-alert-content--error').as('messageError')
            .get('@messageError').should('have.text', 'Invalid credentials')
    })
})