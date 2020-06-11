describe('Form - testing our form inputs', function() {
  beforeEach(() => {
    //would replace with our actual website URL
    cy.visit("http://localhost:3000"); 
  })
  it("add text to inputs and submit form", function() {
    cy.get('[data-cy="name"]')
      .type("Sam")
      .should("have.value", "Sam");
    // "have.value" is Chai syntax --> that's why double quotes

    cy.get('[data-cy="email"]')
      //.type is telling cypress to type what's in the parentheses --> keeps confusing me bc seems like type of input (string, number, etc.), but it's literally just typing into the field what we give it
      .type("email@email.com")
      .should("have.value", "email@email.com");

    cy.get("[data-cy=motivation]") // --> notice, we didn't use ANY quotes around motivation
      .type('I want to help')
      .should('have.value', "I want to help");

    cy.get("#positions")
      .select("Yard Work")
      .should("have.value", "Yard Work");

    cy.get('[type="checkbox"]')
      .check()
      .should("be.checked");

    cy.get("[data-cy=submit]")
      .click();
  });
});


// https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell
//note to self, go over NOTES