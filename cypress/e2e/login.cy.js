import loginData from '../fixtures/login.json'


describe('Login Functionality', () => {
    beforeEach(() => {
        Cypress.on("uncaught:exception", () => {
            return false;
        })
    })


    it('Should login successfully going to home', () => {
        const homeTittle = 'Swag Labs'
        cy.login(loginData.user.userName, loginData.user.password)
        cy.url().should('include', '/inventory.html')
        cy.get('div.app_logo').invoke('text').then((text)=>{
            expect(text).to.equal(homeTittle)
        })
    })
})