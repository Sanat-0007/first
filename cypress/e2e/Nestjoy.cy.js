import { Productpage } from "../support/Pages/AddProduct"
import { Add_Coupons_Page } from "../support/Pages/Add_Coupons"
import { loginpage } from "../support/Pages/Login"
import { Membershippage } from "../support/Pages/Memberships"


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
describe('NestJoy Admin Modules' , () => {
// it('Check Admin Login' , () => {
    
//     // cy.visit('https://nestjoy.projectdevelopment.co/login')
//     // cy.get('#Email').type('saurabh@yopmail.com')
//     // 

// loginpage.login() })

// it ('Add a product', () => {

//   loginpage.login()
//   Productpage.Products()
// Productpage.Addproduct()
// Productpage.Upload_File()
// Productpage.Get_product_name()
// Productpage.Product_measurement()
// Productpage.Add_product_price()
// Productpage.Add_product_discount()
// Productpage.Add_product_category()
// Productpage.Add_sample_price()
// Productpage.Add_short_description()
// Productpage.Add_long_description()
// Productpage.Select_brand()
// Productpage.Select_type()
// Productpage.Select_design()
// Productpage.Select_use()
// Productpage.New_arrival_checkbox()
// Productpage.Clearance_checkbox()
// Productpage.Select_colour()
// Productpage.Add_quantity()
// Productpage.Add_warranty()
// Productpage.Add_sku_number()
// // Productpage.Click_submmit_button()

// })


// it('Add Membership' , () => {

//   loginpage.login()
//   Membershippage.Select_Membership_From_Menubar()
//   Membershippage.Add_Membership_Tier()
//   Membershippage.Add_Membership_Price()
//   Membershippage.Add_Membership_Duration()
//   Membershippage.Add_Membership_Features()
//   Membershippage.Click_Membership_Feature_Button()
//   Membershippage.Click_Submit_Button()


  
//   })

// })

it('Add Coupons', () => {
loginpage.login()
Add_Coupons_Page.Click_Coupons_Menubar()
Add_Coupons_Page.Click_On_Add_Coupon_Button()
Add_Coupons_Page.Coupon_Name_Text_Field()
Add_Coupons_Page.Select_Coupon_Type()
Add_Coupons_Page.Add_coupon_description()

})
})
