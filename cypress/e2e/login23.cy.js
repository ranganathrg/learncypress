describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[type='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get("a.oxd-main-menu-item.active")
  })


  it('Verify login with valid user name and invalid password credentials', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[type='password']").type("fdfdcf")
    cy.get("button[type='submit']").click()
    cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text")
  })


  it('Verify login with invalid user name and invalid password credentials', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Adjhgn")
    cy.get("input[type='password']").type("fdfdcf")
    cy.get("button[type='submit']").click()
    cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text")
  })
  
})