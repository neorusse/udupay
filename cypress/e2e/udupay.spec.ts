/// <reference types="Cypress" />

/* globals cy */
describe('UduPay React Client', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can visit the app', () => {
    cy.get('.sc-htoDjs')
      .click()
      .get('.sc-htoDjs')
      .contains('create account')
      .click()
      .get('.sc-bZQynM')
      .click();
  });
});
