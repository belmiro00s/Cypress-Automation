
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
        it('Should register 2 new users Admin sucessfully by request api', () => {

            const numberOfUsers = 2;
            const users = []

            for (let i = 0; i < numberOfUsers; i++) {
                users.push({
                    username: `${faker.internet.userName()}_${faker.datatype.number()}`,
                    password: faker.internet.password(),
                });
            }
            users.forEach((user) => {
                userPage.createNewUserRequest(user).then((response) => {
                    expect(response.status).to.equal(200)
                })
            })
        })
    })
})