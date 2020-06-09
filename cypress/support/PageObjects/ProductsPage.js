//1. Create Class for HomeObject
class ProductsPage{

    getCheckOut(){
        return cy.get("a.nav-link.btn.btn-primary");
    }

    getActualCheckOut(){
        return cy.get('button.btn.btn-success');
    }

    getCountryName(){
        return cy.get('#country');
    }

    getListOfCountries(){
        return cy.get('.suggestions > :nth-child(n) > li > a');
    }

    getIagree(){
        return cy.get('#checkbox2');
    }

    getPurchase(){
        return cy.get('input[type="submit"]');
    }

    getSuccessMessage(){
        return cy.get('.alert');
    }


}
    
    // 3. Export homepage so that it cant be Imported from other JS file(pageObjectTest.js)
    export default ProductsPage;