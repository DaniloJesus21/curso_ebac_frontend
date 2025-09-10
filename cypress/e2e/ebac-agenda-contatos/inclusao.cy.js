/// <reference types="cypress" />

describe("Inclusão de contato", () => {
  it("Incluir contato", () => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");

    cy.get('input[type="text"]').type("Danilo Jesús");
    cy.get('input[type="text"]').should("have.value", "Danilo Jesús");

    cy.get('[type="email"]').type("email@exemplo.com");
    cy.get('[type="email"]').should("have.value", "email@exemplo.com");

    cy.get('[type="tel"]').type("21999999999");
    cy.get('[type="tel"]').should("have.value", "21999999999");

    cy.get(".adicionar").click();

    cy.screenshot("contato-incluido");
  });
});
