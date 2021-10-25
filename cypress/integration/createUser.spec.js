describe('New User', () => {
  it('Verify we can create a new user', () => {
    cy.visit('/');
    cy.get('a#signin2').click();
    cy.get('input#sign-username').should('be.visible');
    cy.get('input#sign-username').focus().type('florecita');
    cy.get('input#sign-password').type('1234567');
    cy.contains('button.btn-primary', 'Sign up').click();
  });
});