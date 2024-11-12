describe('template spec', () => {
  it('passes', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('of undefined')
        done()
        return false
      });
    cy.visit("/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[type='password']").type("admin123")
    cy.get("button[type='submit']").click()
    //cy.get("a.oxd-main-menu-item.active")
    cy.contains("Admin").click()
    cy.contains("Job").eq(0).click()
    cy.contains("Job Titles").first().click()
   cy.get("i[class='oxd-icon bi-plus oxd-button-icon']").click()
   let r = (Math.random() + 1).toString(36).substring(7);
   cy.get("input[class='oxd-input oxd-input--active']").eq(1).type("Automation QA"+r)
   cy.get("textarea[class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical']").eq(0).type("write Automation scripts")
   cy.get("button[type='submit']").click()
   cy.contains("Successfully").should("be.visible")
  })
})