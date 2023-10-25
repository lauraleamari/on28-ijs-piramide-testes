describe('Testar range', () => {
  it('Pegar o input de range', () => {
    cy.visit('index.html')
    cy.get('input[name="range-input"]').should('exist')
  })

  it('Invocar a função valor e passar um novo valor', () => {
    cy.visit('index.html')
    cy.get('input[name="range-input"]')
    .invoke('val', 25)
    .trigger('change');

    cy.get('p')
    .should('have.text', '25')
  })

})



// npm run start e npm runcypress:run