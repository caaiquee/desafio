/// <reference types = "cypress" />
const dados = require('../fixtures/dados.json')

context('Funcionalidade login', () => {
    beforeEach(() => {
        cy.visit('#/sign_in?last_page=/')
    });

    it('Realizar login', () => {
        cy.login(dados.usuario, dados.senha)
        cy.get('.ant-list-header > div').should('contain', 'Your challenge is:')
    });

    it('Tentar login com usuário inválido', () => {
        cy.login('dados.usuario', dados.senha)
        cy.get('.error-message').should('contain', 'There was a problem logging in:')
    });

    it('Tentar login com senha inválida', () => {
        cy.login(dados.usuario, 'dados.senha')
        cy.get('.error-message').should('contain', 'There was a problem logging in:')
    });
});