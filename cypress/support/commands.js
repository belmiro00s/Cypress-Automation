Cypress.Commands.add("loginSession", (userName, password) => {
  cy.session([userName, password], () => {
    cy.visit('/', { failOnStatusCode: false })
    cy.get('input[name="username"]')
      .should('be.visible')
      .type(userName)
    cy.get('input[name="password"]')
      .should('be.visible')
      .type(password)
    cy.get('button[type="submit"]')
      .contains('Login')
      .click()
  })
})

Cypress.Commands.add("login", (userName, password, noWait) => {
  //cy.intercept("POST", "/auth/validate").as('postLogin')
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('/login', { failOnStatusCode: false })
  cy.get('input[name="username"]')
    .should('be.visible')
    .type(userName)
  cy.get('input[name="password"]')
    .should('be.visible')
    .type(password)
  cy.get('button[type="submit"]')
    .contains('Login')
    .click()
    // if (!noWait) {
    //   return cy.wait('@postLogin')
    // }
})


Cypress.Commands.add("logoutRequest", () => {
  cy.getUserToken().then((token) => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}logout`,
      // body: { "accessToken": token },
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})


Cypress.Commands.add('getUserToken', () => {
  cy.window().then((win) => {
    const userToken = win.localStorage.getItem('/core/i18n/messages');
    cy.log(userToken)
    return cy.wrap(userToken)
  });
});
