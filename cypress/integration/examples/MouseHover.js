describe('MouseHover', function(){

    it('Web Fields', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top');

    
     
    });
});