//1. Create Class for HomeObject
class Homepage{
// 2. Create methods and return them
    getname(){
        
        return cy.get('input[name="name"]:nth-child(2)');
    }

    getTwoWatDataBind(){
        return cy.get('input[name="name"]:nth-child(1)');

    }

    getGender(){
       return cy.get('#exampleFormControlSelect1');
    }

    getEnterpernurRadioBtn(){
        return cy.get('#inlineRadio3');
    }

    getShopTab(){

        return cy.get(':nth-child(2) > .nav-link');
    }

}
// 3. Export homepage so that it cant be Imported from other JS file(pageObjectTest.js)
export default Homepage;