import { loginpage } from "../support/Pages/Login"
import { Membershippage } from "../support/Pages/Memberships"


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
describe('Test Login' , () => {
it('Check Login' , () => {
    
    // cy.visit('https://nestjoy.projectdevelopment.co/login')
    // cy.get('#Email').type('saurabh@yopmail.com')
    // 

loginpage.login()
// loginpage.clickonAddproduct()
// loginpage.filldetails()
// loginpage.clickSubmit()
Membershippage.Selecttier()
})
})