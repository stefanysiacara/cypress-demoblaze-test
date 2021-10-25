describe('New User', () => {
  const USER_NAME = 'florecita1';
  const USER_PASSWORD = '1234567';
  it('Verify we can create a new user', () => {
    cy.visit('/');
    cy.get('a#signin2').click();
    cy.get('input#sign-username').should('be.visible');
    cy.get('input#sign-username').focus().type(USER_NAME).blur();
    cy.get('input#sign-password').type(USER_PASSWORD);
    cy.contains('button.btn-primary', 'Sign up').click();
  });
  after(() => {
    cy.get('a#login2').click();
    cy.get('input#loginusername').should('be.visible');
    cy.get('input#loginusername').focus().type(USER_NAME).blur();
    cy.get('input#loginpassword').type(USER_PASSWORD); 
    cy.contains('button.btn-primary','Log in').click();
    cy.get('#nameofuser').should('be.visible');
    cy.contains('Welcome ' + USER_NAME);
  });
});