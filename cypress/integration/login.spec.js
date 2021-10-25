describe('Login Page', () => {
  const USER_NAME = 'florecita';
  const USER_PASSWORD = '1234567';
  beforeEach(() => {
    cy.visit('/');
    cy.get('a#login2').click();
    cy.get('input#loginusername').should('be.visible');
    cy.get('input#loginusername').focus().type(USER_NAME).blur();
    cy.get('input#loginpassword').type(USER_PASSWORD); 
    cy.contains('button.btn-primary','Log in').click();
  });
  it('verify we can login using valid credentials', () => {
    cy.get('#nameofuser').should('be.visible');
    cy.contains('Welcome ' + USER_NAME);
  });
});
