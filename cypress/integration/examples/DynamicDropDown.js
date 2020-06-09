describe('DynamicDropDown', function(){

    it('Web Fields', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {  
            
        let countryName =$el.text();
        if(countryName.includes('British')){
            $el.click();

           
        }       
    });
   




});
 


});