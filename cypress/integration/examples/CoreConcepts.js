/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('1st testcase_CoreConcepts', function(){

    it('My Test', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca').then(function(){
            console.log('Superman');// to resolve promise 

        });

        
        cy.wait(3000);
        cy.get('.product:visible').should('have.length', 4);

        //Aliasing
        cy.get('.products').as('productloc');        
        cy.get('@productloc').find('.product').should('have.length', 4)        
        cy.get('@productloc').find('.product').eq(3).contains('ADD TO CART').click();
        //cy.get(':nth-child(2) > .product-action > button').click

        //Add to cart using product name 
        cy.get('.products').find('.product').each(($el, index, $list) => {  
            
            const veg =$el.find('h4.product-name').text();
            if(veg.includes('Capsicum')){

                $el.find('button').click();
            }       
        });

        //Handle promise, Below Code will not work as Cypress handling promises with inbuit wrappers
        //will give error message "te.text is not a function"
        //const te= cy.get('.brand'); "Returns promise"
        //cy.log(te.text());
        // need to handle promises using then keyword Which gives information to Function Variable 'logele'
        //on this variable you can perform Account 

        cy.get('.brand').then(function(logoele){
            //cy.log(logoele.text());// text is not not from Cypress, its Jquery method
            cy.log(logoele.text());


        });

        cy.get('.brand').should('have.text', 'GREENKART');

    });

   
});