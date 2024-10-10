class StaticDropdown {

    selectDropdownsElement(selector, index) {
        if (index) {
            cy.get(selector, { timeout: 6000 }).eq(index).click()
        } else {
            cy.get(selector, { timeout: 6000 }).click()
        }

    }

}

export default new StaticDropdown()
