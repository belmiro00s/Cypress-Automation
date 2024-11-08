class InputFields {
    fillInputFields(selector, value, index = 0) {
        cy.get(selector)
            .eq(index)
            .should('be.visible')
            .clear()
            .click()
            .type(value);
    }

}


export default new InputFields();
