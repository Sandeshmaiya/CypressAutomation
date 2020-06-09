import Homepage from  '../../support/PageObjects/HomePage'//1. Import Homepage
import ProductsPage from'../../support/PageObjects/ProductsPage'

describe('Driving TestCase using pageObjectModel', function() {
    //Cypress.config('defaultCommandTimeout', 8000) -- Only for this spec file TimeOut will be 8000
    before(function() {

        cy.visit(Cypress.env("url")); //user of Global Environment Variable cypress.Json
      
      cy.fixture('example').then(function(data){
          this.data=data;

      })
    })
  
    
    it('FrameWork TestCase-pageObject', function(){
    // 2. Create Object of HomePage Class
    let hp= new Homepage();
    let pp= new ProductsPage();
    hp.getname().type(this.data.name);
    hp.getGender().select(this.data.gender);
   
    //Assertion one - Two way DataBind 
    hp.getTwoWatDataBind().should('have.value',this.data.name);

    //Name have property which has Minlengh is 2- property attribute Assertions
    hp.getname().should('have.attr', 'minlength', '2');

    // Diabled CheckBox
    hp.getEnterpernurRadioBtn().should('be.disabled');

    //cy.pause(); or cy.debug();  for debugging the code

    //Adding Product to cart 
    hp.getShopTab().click();  
    
    // This Code is added as generic Function(Commands) in commands.js file 
    // cy.get('h4.card-title').each(($e1, index, $list)=>{
    //    let productName= $e1.text();
    //    if(productName.includes('Blackberry')){
        
    //     cy.get('button.btn.btn-info').eq(index).click();
        
    //    }
    // })

    //use of ForEach to get Array elements(productname from example.json)
    let array1 = this.data.productname;
    array1.forEach(function(element){

        cy.selectProduct(element);

        });
        
      let sum=0;
    pp.getCheckOut().click(); 
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) =>{

        let actualText=$e1.text();
        let res= actualText.split(" ");
        res=res[1].trim();
        sum=sum+ Number(res);
    

    }).then(function(){// this is make Js wait till the Sum of two Number array are added (Asynch)

        cy.log(sum);
    });

    
    cy.get('tr td:nth-child(5) strong').then(function(e2){

        let actualText2=e2.text();
        let total= actualText2.split(" ");
        total=total[1].trim();
        expect(Number(total)).to.equal(sum);//compare two numbers

    });

    pp.getActualCheckOut().click();
    pp.getCountryName().type('United'); 
    pp.getListOfCountries().contains('United Kingdom').click()   
    pp.getIagree().click({ force: true });
    pp.getPurchase().click();

    /*Below String Comparision does not Work  user Jquery Function text() resolve the promise and use Chai 
    assertions "expect(actualText.includes("Success")).to.be.true"*/
    //**cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    
    pp.getSuccessMessage().then(function(element){
        let actualText= element.text();
        expect(actualText.includes("Success")).to.be.true

    });


    // dont Know Why this Approch Failed for Dynamuc Country dropDown????
    // each(($el, index, $list) => {  
             
    //     let countryName =$el.text();  
    //     //console.log  (countryName);  
    //     if(countryName.includes("Indonesia"))
    //     {
    //     }   
    // }); 

    //you can Set env using Cmd line argument
    //****node_modules/.bin/cypress run --spec cypress/integration/examples/PageObjectTest.js --env url=https://rahulshettyacademy.com/angularpractice/ --headed
  

    });

});