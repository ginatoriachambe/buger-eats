
describe('Cadastro', ()=> {
    it('Usuario deve se tornar um entregador', () => {
        cy.viewport(1000,600)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    });
})