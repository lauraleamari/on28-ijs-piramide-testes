describe("Testando links do menu", () => {
  it("1 - verificar se o btn de usuário menu está correto - testando o link sem clicar", () => {
    cy.visit('/index.html')

    cy.get('#users')
    .should('have.attr', 'href').and('include', 'users.html')

  })

  it('2 - verificar se o btn de usuário menu está correto', () => {
    cy.get('#users')
    .should('have.prop', 'href')
    .and('equal', 'http://localhost:7078/users.html')
  })

  it('3 - requisitar uma página', () => {
    cy.get('#google').then(alink => {
      const href = alink.prop('href')

      cy.request(href)
      .its('body')
      .should('include', '</html>')
    })
  })

})

// npm run start e npm runcypress:run