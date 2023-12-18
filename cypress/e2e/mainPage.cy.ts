describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("should display correct header and instructions", () => {
    cy.get("h1").contains("MacroTracker").should("be.visible");
    cy.get(".about > :nth-child(1)").contains("Welcome to an easy way to track your macros!").should("be.visible");
    cy.get(".about > :nth-child(2)").contains("Simply fill out the form, view the results, and save your macros in a list.").should("be.visible");
  });

  it("should contain a link to allow the user to begin using the app and be directed to the next page", () => {
    cy.get(".home-link").contains("Get Started Here").should("be.visible");
    cy.get(".home-link").click()
    cy.get(".form-container").should("be.visible");
  });
});