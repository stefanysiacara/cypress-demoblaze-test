describe('add new product to cart', () => {
  const USER_NAME = 'florecita';
  const USER_PASSWORD = '1234567';
  beforeEach(() => {
    cy.visit('/');
    cy.get('a#login2').click();
    cy.get('input#loginusername').should('be.visible');
    //cy.get('input#loginusername').type(Cypress.env('USER_NAME'),{force:true});
    //cy.get('input#loginpassword').type(Cypress.env('USER_PASSWORD'),{force:true}); 
    cy.get('input#loginusername').focus().type(USER_NAME).blur();
    cy.get('input#loginpassword').type(USER_PASSWORD);
    cy.contains('button.btn-primary','Log in').click();
  });
  it('verify we can add a new product to cart', () => {
    //cy.visit('/prod.html?idp_=2');
    cy.get('#nameofuser').should('be.visible');
    cy.contains('a[class=hrefch]','Samsung galaxy s6').click();
    cy.get('a.btn.btn-success.btn-lg').click();
    cy.get('a#cartur').click();
    cy.contains('tbody#tbodyid','Samsung galaxy s6').should('be.visible');
  });
});