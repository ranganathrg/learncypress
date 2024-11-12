describe("verify Add employee functionality",()=>{

    it("verify Add employee with mandatory details",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[type='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.contains("PIM").click()
    })
})
