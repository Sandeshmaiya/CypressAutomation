describe('StaticDropDown', function(){

    it('Web Fields', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('select').select('option2').should('have.value', 'option2');

});

it('TestCase2', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('select').select('option3').should('have.value', 'option3');

});
 


});