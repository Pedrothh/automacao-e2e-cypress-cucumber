import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import basePage from '../e2e/pages/BasePage';
const basepage = new basePage();

import './login'; 

When("clico no botão Sair", () => {
  basepage.click('#logoutButton');
});
