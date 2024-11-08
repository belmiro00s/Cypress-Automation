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

Cypress.Commands.add("login", (userName, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('auth/login', { failOnStatusCode: false })
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
    const userToken = win.ses('/core/i18n/messages')
    return cy.wrap(userToken)
  })
})


Cypress.Commands.add('getUserCookie', () => {
  cy.getCookie('orangehrm').should('have.property', 'value').then((cookie) => {
    const userCookie = cookie.value
    cy.log(userCookie)
    return cy.wrap(userCookie)
  })
})


Cypress.Commands.add('goToPage', (url, namePage) => {
  cy.visit(url, { failOnStatusCode: false })
  cy.get('div.oxd-table-filter-header-title')
    .should('have.text', namePage)
})
