describe('Login Page', () => {
  beforeEach(() => {
    cy.login();
  });
  it('verify we can login using valid credentials', () => {
    cy.get('#nameofuser').should('be.visible');
    cy.contains('Welcome ' + Cypress.env('USER_NAME'));
  });
});
