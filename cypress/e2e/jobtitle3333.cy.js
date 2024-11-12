import logindata from "../fixtures/login.json"

describe("verify Add job functionality",()=>{

  it("verify add job titlt with mandatory details",()=>{
    cy.visit("/web/index.php/auth/login")
    cy.get("input[name='username']").type(logindata.username)
    cy.get("input[name='password']").type(logindata.password)
    cy.get("button[type='submit']").click()
    cy.get("a[class='oxd-main-menu-item active']").should("be.visible")
    cy.contains("Admin").click()
    cy.contains("Job").click()
    cy.contains("Job Titles").click()
    cy.get("button[type='button']").eq(3).click()
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get("input[class='oxd-input oxd-input--active']").eq(1).type("HR Teamw lead+r")
  
    cy.get("button[type='submit']").click()
    //cy.contains("Successfully saved").should("be.visible")
    
  

  })

  it("verify add job titlt with invalid details",()=>{
    cy.visit("/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get("a[class='oxd-main-menu-item active']").should("be.visible")
    cy.contains("Admin").click()
    cy.contains("Job").click()
    cy.contains("Job Titles").click()
    cy.get("button[type='button']").eq(3).click()
    cy.get("input[class='oxd-input oxd-input--active']").eq(1)
    cy.get("button[type='submit']").click()
    //cy.get("Successfully Saved").should("be.visible")
    cy.contains("Required").should("be.visible")
  

  })
})