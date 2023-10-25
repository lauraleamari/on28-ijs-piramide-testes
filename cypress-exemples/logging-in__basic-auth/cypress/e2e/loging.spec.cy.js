describe('Loggin In - Basic Auth', () => {

  it('quando não passar a autorização retorna 401', () => {
    cy.request({
      url: '/',
      failOnStatusCode: false
    }).its('status').should('equal', 401)
  })

})


// npm run start e npm runcypress:run ou npm run dev