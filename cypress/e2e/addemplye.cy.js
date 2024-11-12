import logindata from "../fixtures/login.json"
import addjobtitledata from "../fixtures/Admin/addjobtitle.json"

describe("verify add employee functionality",() => {
    it('passes', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type(logindata.username)
        cy.get("input[type='password']").type(logindata.password)
        cy.get("button[type='submit']").click()
        cy.get("a.oxd-main-menu-item.active")
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        cy.contains('Add Employee').click()
        cy.get("input[name='firstName']").type(addjobtitledata.jobtitle)
        cy.get("input[name='lastName']").type(addjobtitledata.jobdescription)
        cy.get("button[type='submit']").click()
        cy.get("div.oxd-layout-context")
      })

      it('passes', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[type='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("a.oxd-main-menu-item.active")
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        cy.contains('Add Employee').click()
        cy.get("button[type='submit']").click()
        cy.contains("Required").should("be.visible")
      })
})