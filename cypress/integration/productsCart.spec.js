describe('add new product to cart', () => {
  beforeEach(() => {
    cy.login();
  });
  it('verify we can add a new product to cart', () => {
    //cy.visit('/prod.html?idp_=2');
    cy.get('#nameofuser').should('be.visible');
    cy.contains('a[class=hrefch]','Samsung galaxy s6').click();
    cy.get('a.btn.btn-success.btn-lg').click();
    cy.get('a#cartur').click();
    cy.contains('tbody#tbodyid','Samsung galaxy s6').should('be.visible');
  });

  it('Verify that the list of products in the cart can be purchased', () => {
    cy.get('#nameofuser').should('be.visible');
    cy.get('a#cartur').click();
    cy.get('tbody#tbodyid').should('not.be.empty');
    cy.get('button.btn-success').click();
    cy.get('input#name').should('be.visible');
    cy.get('input#name').type('flor',{force:true});
    cy.get('input#country').type('estados unidos',{force:true});
    cy.get('input#city').type('florida',{force:true});
    cy.get('input#card').type('4444-5555-6666-7777',{force:true});
    cy.get('input#month').type('julio',{force:true});
    cy.get('input#year').type('2021',{force:true});
    cy.contains('button.btn-primary', 'Purchase').click();
    cy.contains('p.lead', '4444-5555-6666-7777').should('be.visible');
    cy.contains('p.lead', 'flor').should('be.visible');
    cy.get('button.confirm').click();
  });
});