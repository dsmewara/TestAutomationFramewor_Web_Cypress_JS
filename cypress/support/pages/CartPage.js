

/***************************************************/

/**
 * CartPage class representing the products page of the application.
 */
class CartPage{

    // Defining Web Elements

    elements = {
    
        // CSS selector for the Your Cart heading
        heading_your_cart: () => cy.get('.title')

    }

    // Operations/Actions with Web Elements

}

// Exporting an instance of the CartPage class to be used by other files
export default new CartPage