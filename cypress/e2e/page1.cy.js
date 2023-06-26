/// <reference types = "cypress"/>
const dados = require('../fixtures/dados.json')

context('Funcionalidade table', () => {

    beforeEach(() => {
        cy.visit('#/sign_in?last_page=/')
        cy.login(dados.usuario, dados.senha)
        cy.get('[href="#/page1"] > span').click()
    });

    it('avançar a página', () => {
        cy.get('.ant-pagination-next > .ant-pagination-item-link').click()
        cy.get('tbody tr:nth-child(1)').should('have.attr', 'data-row-key', 11)
    });

    it('retroceder a página', () => {
        cy.get('.ant-pagination-next > .ant-pagination-item-link').click()
        cy.get('.ant-pagination-item-1').click()
        cy.get('tbody tr:nth-child(1)').should('have.attr', 'data-row-key', 1)
    });

    it('Mudar para a página de número 2', () => {
        cy.get('.ant-pagination-item-2').click()
        cy.get('tbody tr:nth-child(1)').should('have.attr', 'data-row-key', 11)
    });
});