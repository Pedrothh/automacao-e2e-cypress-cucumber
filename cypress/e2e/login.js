import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("https://pedrothh.github.io/my-public-front-for-tests");
});

When("eu insiro um nome de usuário válido e senha válida", () => {
  cy.get("#username").type("user");
  cy.get("#password").type("12345");
});

When("clico no botão Entrar", () => {
  cy.get('button[type="submit"]').click();
});

Then("eu devo ser redirecionado para a página inicial", () => {
  cy.url().should("include", "/home");
  cy.screenshot();
});