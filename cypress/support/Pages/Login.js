const emailfield = "#Email";




 export class Login{
    login(){
        cy.visit('https://nestjoy.projectdevelopment.co/login')
        cy.get(emailfield).type("rohit@yopmail.com");
        cy.get('#Password').type('2908@Aman')
    cy.get('.login_btn').click()
    cy.wait(4000)
    
    }

clickonAddproduct(){
    //
}
filldetails(){

}
clickSubmit(){

}
 }

export const loginpage = new Login()