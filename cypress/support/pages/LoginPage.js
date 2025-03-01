import basePage from './BasePage'


/**
 * LoginPage class representing the login page of the application.
 */
class LoginPage{

    // Defining Web Elements

    elements = {
    
        // XPath for the username textbox
        textbox_username: () => cy.xpath("//input[@id='user-name']"),

        // CSS selector for the password textbox
        textbox_password: () => cy.get('#password'),

        // CSS selector for the login button
        button_login: () => cy.get('#login-button'),

        // XPath for the Error message
        message_error_not_match: () => cy.xpath("//h3[contains(text(),'do not match')]"),

    }

    // Operations/Actions with Web Elements

    /**
    * Perform login to the application with the provided username and password.
    * @param {string} username - The username to be used for login.
    * @param {string} password - The password to be used for login.
    */
    loginToApplication(username, password){
      
        // Logging the login action with provided username and password
        cy.log('Logging into application using '+ username + ' and '+ password)

        // Filling the username and password fields and clicking the login button
        basePage.fillTextBox(this.elements.textbox_username(), username)
        basePage.fillTextBox(this.elements.textbox_password(), password)
        basePage.clickOnWebElement(this.elements.button_login())
        
    }

    /**
     * Perform login to the application with valid credentials.
     */    
    loginToApplicationWithValidCredentials(){

        // Loading login credentials from JSON file
        const loginCredentials = require('../../fixtures/login_credentials.json');  

        // Extracting credentials for valid case
        const {valid_username, valid_password} = loginCredentials.data.credentials_1;
  
        this.loginToApplication(valid_username, valid_password)

    }

}

// Exporting an instance of the LoginPage class to be used by other files
export default new LoginPage