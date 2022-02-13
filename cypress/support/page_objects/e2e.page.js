class E2E {

    pedido(size, color){
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click();
        cy.get('.button-variable-item-' + size).click();
        cy.get('.button-variable-item-' + color).click();
        cy.get('.single_add_to_cart_button').click();
    }

    comprar(){
        cy.get('.woocommerce-message > .button').click();
        cy.get('.checkout-button').click();
        cy.get('#terms').click();
        cy.get('[name="checkout"]').submit();
    }

}

export default new E2E()