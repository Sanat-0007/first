export class memberships{
Selecttier(){
    cy.get('a[href="/superAdmin/manageMemberShip"]').click()

    cy.get('[class="form-control ng-untouched ng-pristine ng-invalid"]')
}

}


export const Membershippage = new memberships()
