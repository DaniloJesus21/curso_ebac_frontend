/// <reference types="cypress" />

describe("Alteração de contato", () => {
  it("Alterar contato", () => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");

    cy.get(".contato").last();
    cy.get(":last-child > .sc-gueYoa > .edit").click();
    cy.get('input[type="text"]').clear();
    cy.get('input[type="text"]').type("Nome Editado");
    cy.get('input[type="text"]').should("have.value", "Nome Editado");

    cy.get('input[type="email"]').clear();
    cy.get('input[type="email"]').type("emaileditado@exemplo.com");
    cy.get('input[type="email"]').should(
      "have.value",
      "emaileditado@exemplo.com"
    );

    cy.get('input[type="tel"]').clear();
    cy.get('input[type="tel"]').type("21900000000");
    cy.get('input[type="tel"]').should("have.value", "21900000000");

    cy.get(".alterar").click();

    cy.screenshot("contato-alterado");
  });
});
