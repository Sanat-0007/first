const Membership_menubar = 'a[href="/superAdmin/manageMemberShip"]'
const Select_Membership_tier = '[formcontrolname="tier"]'
const Select_Membership_Price = '[formcontrolname="tierPrice"]'
const Select_Plan_Duration = '[formcontrolname="tierPlan"]'
const Membership_Features_Add_Button = '[class="uk-icon"]'
const Membership_Features = '[formcontrolname="feature"]'
const Membership_Submit_button = '[type="submit"]'


export class memberships{
Select_Membership_From_Menubar(){
    cy.get(Membership_menubar).click()}

    Add_Membership_Tier () {
        cy.get(Select_Membership_tier).select("Silver", {force : true});
    }
    Add_Membership_Price () {
        cy.get(Select_Membership_Price).type('200')
    }
    Add_Membership_Duration(){
        cy.get(Select_Plan_Duration).select("month", {force : true})
    }
   Add_Membership_Features(){
    cy.get(Membership_Features).type(" Demo Feature ")
   }
   Click_Membership_Feature_Button(){
    cy.get(Membership_Features_Add_Button).click({multiple : true})
   }
  Click_Submit_Button (){
    cy.get(Membership_Submit_button).click()
  }
   
//    cy.get(Membership_Features).type(" Demo Feature 2 ")
//    cy.get(Membership_Features_Add_Button).click({multiple : true})


}



export const Membershippage = new memberships()
