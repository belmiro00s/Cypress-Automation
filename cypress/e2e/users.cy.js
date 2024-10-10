
import { Faker, Randomizer } from '@faker-js/faker';
import loginData from '../fixtures/login.json'
import staticDropdowns from '../support/utils/static-dropdowns';


describe('Login Functionality', () => {
    beforeEach(() => {
        Cypress.on("uncaught:exception", () => {
            return false;
        })
        cy.login(loginData.user.userName, loginData.user.password)
    })


    context('User register', () => {
        it('Should register an new user sucessfully', () => {
            cy.goToPage('admin/viewSystemUsers', 'System Users')
            cy.get('button.oxd-button').contains('Add').click()
            staticDropdowns.selectDropdownsElement('div.oxd-select-text-input', '0')
            staticDropdowns.selectDropdownsElement('div.oxd-select-text-input', '1')
        })
    })

})