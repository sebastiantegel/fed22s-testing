describe("testing todo application", () => {
  it("should show title", () => {
    cy.visit("http://localhost:1234");

    cy.get("h2").contains("todo");
  });

  it("should be able to type", () => {
    cy.visit("http://localhost:1234");

    cy.get("input").type("Träna").should("have.value", "Träna");
  });

  it("should add todo", () => {
    cy.visit("http://localhost:1234");

    cy.get("input").type("Träna").should("have.value", "Träna");

    cy.get("button:first").click();

    cy.get("ul > li").should("have.length", 1);
  });

  it("should toggle todo", () => {
    cy.visit("http://localhost:1234");

    cy.get("input").type("Träna").should("have.value", "Träna");

    cy.get("button:first").click();

    cy.get("ul > li").should("have.length", 1);

    cy.get("ul > li:first").click();

    cy.get("ul > li:first").should("have.class", "todo__text--done");
  });
});
