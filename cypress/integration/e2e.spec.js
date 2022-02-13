/// <reference types="cypress" />

import E2E from '../support/page_objects/e2e.page';

const pedido = require('../fixtures/pedido.json');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        });
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        E2E.pedido(pedido[1].tamanho, pedido[1].cor);
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.');
        E2E.comprar();
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
    });


})