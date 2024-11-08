
import { faker } from '@faker-js/faker';
import loginData from '../fixtures/login.json'
import staticDropdowns from '../support/utils/static-dropdowns';
import inputFields from '../support/utils/input-fields';
import dynamicDropdown from '../support/utils/dynamic-dropdown';


describe('Login Functionality', () => {
    beforeEach(() => {
        Cypress.on("uncaught:exception", () => {
            return false;
        })
        cy.login(loginData.user.userName, loginData.user.password)
    })


    context('User register', () => {
        it('Should register an new user Admin sucessfully', () => {
            const password = faker.internet.password() + 1
            const employeName = "Joseph  Evans"
            const userName = faker.internet.userName()

            cy.goToPage('admin/viewSystemUsers', 'System Users')
            cy.get('button.oxd-button').contains('Add').click()
            staticDropdowns.selectDropdownsElement('div.oxd-select-text-input', '0', 'Admin')
            staticDropdowns.selectDropdownsElement('div.oxd-select-text-input', '1', 'Enabled')
            dynamicDropdown.selectOptionDropdownElements('div.oxd-autocomplete-text-input', employeName, '0')
            inputFields.fillInputFields('input.oxd-input', userName, '1')
            inputFields.fillInputFields('input.oxd-input', password, '2')
            inputFields.fillInputFields('input.oxd-input', password, '3')
            cy.get('button').contains('Save').click()
            cy.get('div.oxd-toast-start')
            .find('p.oxd-text')
            .contains('Successfully Saved')
            .should('be.visible')
        })
    })
})