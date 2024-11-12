describe('verify login functionality', () => {

  //it('verify login with valid crendentials', () => {
  //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.get("input[name='username']").type("Admin")
    //cy.get("input[name='password']").type("admin123")
    //cy.get("button[type='submit']").click()
    //cy.get("a[class='oxd-main-menu-item active']").should("be.visible")
    
  })

  const menuitems = {
    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave",
    menu4: "Time",
  
  }

  it.only('verify login with valid user name invalid password', () => {

    switch (Cypress.browser.name){
      case "Chrome":
        cy.viewport(1920,1080)
        break;
      case "edge":
        cy.viewport("iphone-3")
        break;

    }
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123dfd")
    cy.get("button[type='submit']").click()
    cy.contains("Invalid credentials").should("be.visible")
    for(let item in menuitems){
    cy.contains("The menu is:"+ menuitems[item]).should("visible")
    }

    
  })

  it('verify login with invalid user name with  valid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admindffds")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.contains("Invalid credentials").should("be.visible")
    
  })

  it('verify login with invalid user name with  invalid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admindffds")
    cy.get("input[name='password']").type("admin123gfhgh")
    cy.get("button[type='submit']").click()
    cy.contains("Invalid credentials").should("be.visible")
    
  })
