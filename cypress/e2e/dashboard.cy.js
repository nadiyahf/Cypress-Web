import * as objects from "./objects/page.js"

before(() => {
    cy.config("defaultCommandTimeOut",20000);
  });

describe("Saucedemo - Dashboard", () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get(objects.input_username).type("standard_user");
    cy.get(objects.input_password).type("secret_sauce");
    cy.get(objects.button_login).click();
  });

  it('Logs in, add an product to the cart, and remove it', () => {
    cy.contains('Sauce Labs Backpack').should('be.visible'); //add an product to the cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); 
    cy.get('.shopping_cart_badge').should('contain', '1');
    
    // Click the cart icon
    cy.get('.shopping_cart_link').click();

    // Verify the cart page 
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1); // Ensure one item is in the cart

    // Remove the item from the cart
     cy.get('[data-test="remove-sauce-labs-backpack"]').click(); // Remove "Sauce Labs Backpack"

     // Verify that the item has been removed by checking the cart badge and item count
     cy.get('.shopping_cart_badge').should('not.exist');  
    cy.get('.cart_item').should('not.exist');          
    });
})