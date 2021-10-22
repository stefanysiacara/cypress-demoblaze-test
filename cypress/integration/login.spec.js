describe('Login Page', () => {
    it('verify we can login using valid credentials', () => {
       cy.visit('/');
       cy.get('a#login2').click();
       cy.get('input#loginusername').type('rcgongorad');
       cy.wait(2000);
       cy.get('input#loginpassword').type('171183'); 
       cy.wait(2000);
       cy.contains('button.btn-primary','Log in').click();
       cy.contains('Welcome rcgongora');
    });
});
