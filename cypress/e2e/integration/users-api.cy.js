
import { faker } from '@faker-js/faker';
import loginData from '../../fixtures/login.json'
import userPage from '../../support/pages/user';




describe('Login Functionality', () => {
    beforeEach(() => {
        Cypress.on("uncaught:exception", () => {
            return false;
        })
        cy.login(loginData.user.userName, loginData.user.password)
    })


    context('User register', () => {
        it('Should register 2 new Admin users successfully via API request', () => {

            const numberOfUsers = 2;
            let users 

            users = Array.from({length: numberOfUsers}).map(()=> ({
                username: `${faker.internet.userName()}_${faker.datatype.number()}`,
                password: faker.internet.password(),
            }))

            users.forEach((user) => {
                userPage.createNewUserRequest(user).then((response) => {
                    expect(response.status).to.equal(200)
                })
            })
        })
    })



    
})