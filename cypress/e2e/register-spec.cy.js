import loginData from '../fixtures/login.json'


describe('Login Functionality', () => {
    beforeEach(() => {
        cy.login(loginData.user.userName, loginData.user.password)
    })


    it('should login successfully with valid credentials', () => {
        cy.log('build a project cypress')
    })
})