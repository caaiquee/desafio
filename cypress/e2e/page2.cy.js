/// <reference types = "cypress" />
const dados = require('../fixtures/dados.json')
const form = require('../fixtures/form.json')
import formMaker from '../support/page-objects/formMaker.page'

context('Funcionalidade formulário de itens', () => {

    beforeEach(() => {
        cy.visit('#/sign_in?last_page=/')
        cy.login(dados.usuario, dados.senha)
        cy.get('[href="#/page2"]').click()
    });

    it('mudar orientação para horizontal', () => {
        cy.get('.ant-radio-button-wrapper-checked').click()
        formMaker.editarElementosTexto(form.input, form.textArea, 'horizontal')
        formMaker.editarElementosSelect(form.select, form.cascader, 'horizontal')
        formMaker.editarElementosPicker(form.datePicker,'horizontal')
        formMaker.editarElementosAnimados('horizontal')
    });

    it('mudar para orientação vertical', () => {
        cy.get('.ant-radio-group > :nth-child(2)').click()
        formMaker.editarElementosTexto(form.input, form.textArea, 'vertical')
        formMaker.editarElementosSelect(form.select, form.cascader, 'vertical')
        formMaker.editarElementosPicker(form.datePicker, 'vertical')
        formMaker.editarElementosAnimados('vertical')
    });

    it('mudar para orientação in line', () => {
        cy.get('.ant-radio-group > :nth-child(3)').click()
        formMaker.editarElementosTexto(form.input, form.textArea, 'inLine')
        formMaker.editarElementosSelect(form.select, form.cascader, 'inLine')
        formMaker.editarElementosPicker(form.datePicker, 'inLine')
        formMaker.editarElementosAnimados('inLine')
    });

    it('Limpar o campo Input', () => {
        cy.get('.ant-input-affix-wrapper > .ant-input').click().type('arroz')
        cy.get('.ant-input-suffix').click()
        cy.get('.ant-input-affix-wrapper > .ant-input').should('have.attr', 'value', '')
    });

    it('digitar muitos caracteres no campo de texto', () => {
        cy.get('.ant-form-item-children > .ant-input').type('FeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijãoFeijão')
    });
});