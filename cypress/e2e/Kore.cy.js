describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://kore.staging.projectdevelopment.co/')
    cy.get('#Input_Email').type('praveen.kumar@saffrontech.net')
    cy.get('#Input_Password').type('YOGESH@123')
    cy.get("[type='submit']").click()
    cy.get('[href="/executive/project"] span').click()
  
  })
})