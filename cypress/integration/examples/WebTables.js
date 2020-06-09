describe('WebTables', function(){

    it('Web Fields', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('tr td:nth-of-type(2)').each(($e1, index, $list) =>{


        let coursename= $e1.text();
        if(coursename.includes('Python')){

            cy.get('tr td:nth-of-type(2)').eq(index).next().then(function(price) {

               let pricevalue= price.text();
               expect(pricevalue).to.equal('25')
            
                }) 
            }
        })      
     
    });
});
   