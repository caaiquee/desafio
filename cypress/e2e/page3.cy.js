/// <reference types = "cypress"/>
const dados = require('../fixtures/dados.json')

context('Funcionalidade navergar entre páginas', () => {
beforeEach(() => {
    cy.visit('#/sign_in?last_page=/')
    cy.login(dados.usuario, dados.senha)
    cy.get('[href="#/page3"]').click()
});

    it('Ir para page 1', () => {
        cy.get(':nth-child(2) > .ant-breadcrumb-link > a').click()
        cy.get('.ant-table-column-sorters').should('exist')
    });

    it('Ir para page 2', () => {
        cy.get(':nth-child(3) > .ant-breadcrumb-link > a').click()
        cy.get('.ant-radio-button-wrapper-checked').should('exist')
    });

    it('Ir para page 3', () => {
        cy.get(':nth-child(4) > .ant-breadcrumb-link').should('exist')
    });
});