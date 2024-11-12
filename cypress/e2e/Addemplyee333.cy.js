describe("verify Add employee functionality",()=>{

  it("verify Add employee with mandatory details",()=>{
  cy.visit("/web/index.php/auth/login")
  cy.get("input[name='username']").type("Admin")
  cy.get("input[name='password']").type("admin123")
  cy.get("button[type='submit']").click()
  cy.get("a[class='oxd-main-menu-item active']").should("be.visible")
  cy.get("a[href='/web/index.php/pim/viewPimModule']").click()
  cy.contains("Add Employee").click()

  cy.get("input[name='firstName']").type("bjbhjhranganath")
  cy.get("input[name='lastName']").type("D")
  cy.get('button[type="submit"]').click()
  cy.contains("Successfully Saved").should("be.visible")
  })

  
  it("verify Add employee with mandatory detailsina required fields",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get("a[class='oxd-main-menu-item active']").should("be.visible")
    cy.get("a[href='/web/index.php/pim/viewPimModule']").click()
    cy.contains("Add Employee").click()
    cy.get('button[type="submit"]').click()
    cy.get("span[class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").eq(0).should("be.visible")
    cy.get("span[class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").eq(1).should("be.visible")
    cy.contains("Required").should('be.visible ')
    })


})