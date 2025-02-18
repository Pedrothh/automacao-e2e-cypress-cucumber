import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from '../e2e/pages/LoginPage';
const login = new loginPage();

import basePage from '../e2e/pages/BasePage';
const basepage = new basePage();
let userName = "";

Given("que estou na página de login", () => {
  cy.visit("https://pedrothh.github.io/my-public-front-for-tests");
});

When("insiro um nome de usuário {string} e senha {string}", (username, password) => {
  login.typeUserName(username);
  userName = username;
  login.typePassword(password);
});

When("clico no botão Entrar", () => {
  login.pressSubmit();
});

Then("devo ser redirecionado para a página {string}", (url) => {
  basepage.validarContainsUrl(url);
});


Then("não devo ser redirecionado para a página {string}", (url) => {
  cy.url().should("not.include", url);
});

When("devo visualizar uma mensagem de erro {string}", (mensagemErro) => {
  login.shouldSeeTheLoginFailMessage(mensagemErro)
});

When("devo visualizar a mensagem {string}", (mensagem) => {
  login.shouldSeeTheLoginSuccessfullyMessage(mensagem)
});

When("devo visualizar o nome do usuário logado na mensagem de Boas Vindas", () => {
  login.shouldSeeTheLoginPageUsername(userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase())
});