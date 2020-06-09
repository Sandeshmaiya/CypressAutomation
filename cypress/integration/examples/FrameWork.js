describe('FrameWork', function() {
    before(function() {

        cy.visit("https://rahulshettyacademy.com/angularpractice/");
      
      cy.fixture('example').then(function(data){
          this.data=data;

      })
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  
    beforeEach(() => {
      // runs before each test in the block
    })
  
    afterEach(() => {
      // runs after each test in the block
    })

it('FrameWork TestCase', function(){
    

    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('#exampleFormControlSelect1').select(this.data.gender);
   
    //Assertion one - Two way DataBind 
    cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name);

    //Name have property which has Minlengh is 2- property attribute     Assertions
    cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');

    // Diabled CheckBox
    cy.get('#inlineRadio3').should('be.disabled');

    //cy.pause(); or cy.debug();  for debugging the code

    //Adding Product to cart 
    cy.get(':nth-child(2) > .nav-link').click();  
    
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
    });

});