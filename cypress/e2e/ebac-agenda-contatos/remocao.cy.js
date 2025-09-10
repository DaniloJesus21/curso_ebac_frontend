/// <reference types="cypress" />

describe("Remoção de contato", () => {
  it("Remover contato", () => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");

    cy.get(".contato").last();
    cy.get(":last-child > .sc-gueYoa > .delete").click();

    cy.screenshot("contato-removido");
  });
});
