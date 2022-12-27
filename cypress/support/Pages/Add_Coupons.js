const coupons_from_menubar = '[href="/superAdmin/manageCoupan"]'
const Add_Coupon_Button = '[href="/superAdmin/manageCoupan/addNewCoupan"]'
const Add_Coupon_Name = '#secName'
const Coupon_type = '[formcontrolname="coupanType"]'
const Add_coupon_description = '[formcontrolname="description"]'


export class Add_Coupons  {
Click_Coupons_Menubar(){
cy.get(coupons_from_menubar).click()
}
Click_On_Add_Coupon_Button(){
    cy.get(Add_Coupon_Button).click()

}
Coupon_Name_Text_Field(){
    cy.get(Add_Coupon_Name).type('DemoCoupon22', {force: true})
}
Select_Coupon_Type(){
cy.get(Coupon_type).select("pd", {force:true})
}
Add_coupon_description(){
cy.get(Add_coupon_description).type("This is a Demo Description")
}

}

export const Add_Coupons_Page = new Add_Coupons()
