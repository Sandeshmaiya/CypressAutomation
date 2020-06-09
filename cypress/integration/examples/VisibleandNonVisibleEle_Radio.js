describe('Visible_NonVisibleElements', function(){

    it('Web Fields', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

   
    cy.get('#displayed-text').should('be.visible').type('SandeshMaiya');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();

    cy.get('[value="radio2"]').check().should('be.checked') ;    
     
});
});
   