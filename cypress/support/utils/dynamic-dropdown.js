class DynamicDropdown {
    selectOptionDropdownElements(selector, option) {
        cy.intercept('GET', '**/pim/**').as('autocomplete');
        cy.get(selector, { timeout: timeout })
          .clear({ force: true })
          .click()
          .wait('@autocomplete')
          .get('li[role="option"]', { timeout: timeout }).then(($ele) => {
            const elementFound = Array.from($ele).some(($el) => {
              if ($el.textContent.includes(option)) {
                cy.wrap($el).click();
                return true
              }
              return false
            })
            if (!elementFound) {
              throw new Error(`The text "${option}" was not found in list`)
            }
          })
      }
}

export default new DynamicDropdown()
