require('cypress-plugin-tab');
class FormPage2{
    editarElementosTexto(input, textArea, orientation){
        let inputMap, textAreaMap
        switch (orientation) {
            case 'horizontal':
                inputMap = '.ant-input-affix-wrapper > .ant-input'
                textAreaMap = '.ant-form-item-children > .ant-input'
                break;
            case 'vertical':
                inputMap = '.ant-input-affix-wrapper > .ant-input'
                textAreaMap = ''
            case 'inLine':
                inputMap = '.ant-input-affix-wrapper > .ant-input'
                textAreaMap = '.ant-form-item-children > .ant-input'
                break;
            default:
                break;
        }
        cy.get(inputMap).click().type(input)
        cy.get(textAreaMap).click().type(textArea)
        
    }

    editarElementosSelect(select, cascader, orientation){
        let countryMap, treeSelectMap, treeSelectColorMap, treeSelectColorchildMap, cascaderMap, cascaderEstadoMap, cascaderCidadeMap
        switch (orientation) {
            case 'horizontal':
                countryMap = ':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection'
                treeSelectMap = ':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection'
                treeSelectColorMap = '.ant-select-tree-switcher'
                treeSelectColorchildMap = ':nth-child(2) > .ant-select-tree-node-content-wrapper'
                cascaderMap = '.ant-cascader-picker > .ant-input'
                cascaderEstadoMap = '.ant-cascader-menu-item'
                cascaderCidadeMap = ':nth-child(2) > [title="' + cascader + '"]'
                break;
            case 'vertical':
                countryMap = ':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection'
                treeSelectMap = ':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'
                treeSelectColorMap = '.ant-select-tree-switcher'
                treeSelectColorchildMap = ':nth-child(2) > .ant-select-tree-node-content-wrapper'
                cascaderMap = '.ant-cascader-picker > .ant-input'
                cascaderEstadoMap = '.ant-cascader-menu-item'
                cascaderCidadeMap = ':nth-child(2) > [title="' + cascader +'"]'
            case 'inLine':
                countryMap = ':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection'
                treeSelectMap = ':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection'
                treeSelectColorMap = '.ant-select-tree-switcher'
                treeSelectColorchildMap = ':nth-child(2) > .ant-select-tree-node-content-wrapper'
                cascaderMap = '.ant-cascader-picker > .ant-input'
                cascaderEstadoMap = '.ant-cascader-menu-item'
                cascaderCidadeMap = ':nth-child(2) > [title="' + cascader +'"]'
                break;

            default:

                break;
        }
        cy.get(countryMap).click().type(select + '{enter}')
        cy.get(treeSelectMap).
        click().get(treeSelectColorMap).
        click().get(treeSelectColorchildMap).
        click()
        cy.get(cascaderMap).click().get(cascaderEstadoMap).click().
        get(cascaderCidadeMap).click()
    }

    editarElementosPicker(datePicker, orientation){
        let datePickerMap, datePickerchildMap, dateMap
        switch (orientation) {
            case 'horizontal':
                datePickerMap = '.ant-calendar-picker-input'
                datePickerchildMap = '.ant-calendar-input-wrap'
                dateMap = datePicker + '{enter}'
                break;
            case 'vertical':
                datePickerMap = '.ant-calendar-picker-input'
                datePickerchildMap = '.ant-calendar-input-wrap'
                dateMap = datePicker + '{enter}'
                break;
            case 'inLine':
                datePickerMap = '.ant-calendar-picker-input'
                datePickerchildMap = '.ant-calendar-input-wrap'
                dateMap = datePicker + '{enter}'
                break;
        }
        cy.get(datePickerMap).click().
        get(datePickerchildMap).
        type(dateMap)
    }

    editarElementosAnimados(orientation){
        let sliderMap, switchMap
        switch (orientation) {
            case 'horizontal':
                sliderMap = '.ant-slider-step'
                switchMap = '.ant-switch'
                break;
            case 'vertical':
                sliderMap = '.ant-slider-step'
                switchMap = '.ant-switch'
                break;
            case 'inLine':
                sliderMap = '.ant-slider-step'
                switchMap = '.ant-switch'
                break;
            default:
                break;
        }
        cy.get(sliderMap).click()
        cy.get(switchMap).click()
    }
}

export default new FormPage2()