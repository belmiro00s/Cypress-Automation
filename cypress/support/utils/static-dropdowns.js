
class StaticDropdown {

    selectDropdownsElement(selector, index = 0, option) {
        cy.get(selector).eq(index).should('be.visible').click()
        cy.get('div[role="option"]').each(function ($ele) {
            if ($ele.text().includes(option)) {
                cy.wrap($ele).click()
            }
        })
    }
}

export default new StaticDropdown()
