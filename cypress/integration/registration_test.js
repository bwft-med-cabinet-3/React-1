describe("MedCabinet Registration", () => {

    //declaring variables to be used for extensive testing
    const submitButton = () => cy.get("button[name='submit']")

    it("can navigate to http://localhost:3006/register", () => {
        cy.visit("http://localhost:3006/register")
        cy.url().should("includes", "localhost")
    })

    //first test submit is disabled with empty input
    it("button is disabled before inputs", () => {
        submitButton().should('be.disabled')
    })
    

    //test typing in username into input then use assertion to verify name typed matches
    it("can type something in the 'text' input", () => {
        cy.get("input[name='username']")
        .type("typicalUsername")
        .should("have.value", "typicalUsername")
    })

    //test typing in email into specified input 
    it("can type email in the 'text' input", () => {
        cy.get("input[name='email']")
        .type("myemail123@email.com")
        .should("have.value", "myemail123@email.com")
    })

    //test typing in password in specified input
    it("can type password in the 'text' input", () => {
        cy.get("input[name='password']")
        .type("Password123")
        .should("have.value", "Password123")
    })

    //test inputing birthdate
    it("can input user's birthday", () => {
        cy.get("input[name='birthdate']")
        .type("01/18/1989")
        .should("have.value", "01/18/1989")
    })

    //test terms checkbox
    it("terms of service checkbox functional", () => {
        cy.get("[type='checkbox']")
        .check()
    })


    //test submit functionality
    it("can submit registration form", () => {
        submitButton().should('be.enabled')
        submitButton().click()
          })
    })