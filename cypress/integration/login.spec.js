describe('Login Page', () => {
    const USER_NAME = 'rcgongora';
    const USER_PASSWORD = '171183';
    beforeEach(() => {
        cy.visit('/');
        cy.get('a#login2').click();
        cy.get('input#loginusername').type(USER_NAME);
        cy.wait(2000);
        cy.get('input#loginpassword').type(USER_PASSWORD); 
        cy.wait(2000);
        cy.contains('button.btn-primary','Log in').click();
    });
    it('verify we can login using valid credentials', () => {
        cy.get('#nameofuser').should('be.visible');
        cy.contains('Welcome ' + USER_NAME);
    });
});
