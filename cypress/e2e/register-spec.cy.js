import loginPage from '../support/pages/login'

describe('Login Functionality', () => {
    beforeEach(() => {
        loginPage.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
    })


    it('should login successfully with valid credentials', () => {
        cy.log('build a project cypress')
    })
})