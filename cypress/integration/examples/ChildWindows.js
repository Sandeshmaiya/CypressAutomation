describe('ChildWindows', function(){

    it('Web Fields', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

     cy.get('#opentab').invoke('removeAttr', 'target').click();
     cy.url().should('include', 'rahulshettyacademy.com/#/index')// to compare Url Substrings
     cy.go('back')// or Forward


// *************Meathod 2 *******************using href, THis Will Work only if you are woking in same domain
    //  cy.get('#opentab').then(function(e1){
         
    //     let url= e1.prop('href');
    //     cy.visit(url);


    //  });
       
     
});
});
   