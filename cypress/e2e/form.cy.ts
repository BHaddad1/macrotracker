describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/form");
  });
  it("should have a form for a user to search for a food item", () => {
    cy.get(".header").contains("Enter Name of Food").should("be.visible");
    cy.get(".food-input").should("be.visible");
    cy.get(".form-button").should("be.visible");
  });

  it("should be able to enter a food item and submit the form", () => {
    cy.get(".food-input").type("hotdog");
    cy.get(".form-button").click(); 
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/results");
    });
  })
  
})