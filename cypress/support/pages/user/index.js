import _ from "lodash";

import userData from "../../../fixtures/user.json"

class User {

    createNewUserRequest(obj) {
        return cy.wrap().then(() => {
            const mergedBody = _.merge({}, userData.userBodyRequest, obj);
            cy.getUserCookie().then((cookie) => {
                cy.request({
                    method: 'POST',
                    url: `${Cypress.env('apiUrl')}admin/users`,
                    body: mergedBody,
                    Cookie: cookie
                })
            })
        })
    }

}

export default new User();
