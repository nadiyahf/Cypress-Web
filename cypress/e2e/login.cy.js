import * as objects from "./objects/page.js"

before(() => {
  cy.config("defaultCommandTimeOut",20000);
});

describe("Saucedemo - Login", () => {
    it('Success Login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get(objects.input_username).type("standard_user");
    cy.get(objects.input_password).type("secret_sauce");
    cy.get(objects.button_login).click();
  })
})