describe("verify Add employee functionality",()=>{

    it("verify Add employee with mandatory details",()=>{
    cy.visit("/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get("a[class='oxd-main-menu-item active']").should("be.visible")
    cy.get("a[href='/web/index.php/pim/viewPimModule']").click()
    cy.contains("Add Employee").click()
    })
})
