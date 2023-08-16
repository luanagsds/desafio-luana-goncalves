class CaixaDaLanchonete {
    // 'debito',['cafe,1','chantily,1']
        calcularValorDaCompra(metodoDePagamento, itens) {
    //   ### CARDÁPIO
    
    //   | codigo    | descrição                   | valor   |
    //   |-----------|-----------------------------|---------|
    //   | cafe      | Café                        | R$ 3,00 | 0 + 3
    //   | chantily  | Chantily (extra do Café)    | R$ 1,50 | 3 + 1.5
    //   | suco      | Suco Natural                | R$ 6,20 |
    //   | sanduiche | Sanduíche                   | R$ 6,50 |
    //   | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
    //   | salgado   | Salgado                     | R$ 7,25 |
    //   | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
    //   | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |
            let codigo = ['cafe', 'chantily', 'suco', 'sanduiche', 'queijo', 'salgado', 'combo1', 'combo2'];
            let valor = [3.00, 1.50, 6.20, 6.50, 2.00, 7.25, 9.50, 7.50];
    // ### FORMAS DE PAGAMENTO
    // Atualmente a Lanchonete aceita as seguintes formas de pagamento:
    //  - dinheiro
    //  - debito
    //  - credito
            let formaDePagamento = ['dinheiro', 'debito', 'credito'];
            let valorTotal = 0;
            let codigosDoPedido = [];
            let quantidadeDoPedido = [];
            
            //Loop para separar os codigos e as quantidades
            for(let i = 0; i < itens.length; i++) {
                let codigo = itens[i].split(',')[0];
                let quantidade = itens[i].split(',')[1];
                codigosDoPedido.push(codigo);
                quantidadeDoPedido.push(quantidade);
            }
    //         ### OUTRAS REGRAS
    
    // - Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
    // - Combos não são considerados como item principal.
    // - É possível pedir mais de um item extra sem precisar de mais de um principal.
            if(codigosDoPedido.includes('chantily') && !codigosDoPedido.includes('cafe')) {
                return 'Item extra não pode ser pedido sem o principal';
            }
            if(codigosDoPedido.includes('queijo') && !codigosDoPedido.includes('sanduiche')) {
                return 'Item extra não pode ser pedido sem o principal';
            }
    
    // - Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
            if(codigosDoPedido.length == 0) {
                return 'Não há itens no carrinho de compra!';
            }
    // - Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
            if(quantidadeDoPedido.includes('0')) {
                return 'Quantidade inválida!';
            }
    // - Se o código do item não existir, apresentar mensagem "Item inválido!"
            for(let i = 0; i < codigosDoPedido.length; i++) {
                if(!codigo.includes(codigosDoPedido[i])) {
                    return 'Item inválido!';
                }
            }
    // - Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"
            if(!formaDePagamento.includes(metodoDePagamento)) {
                return 'Forma de pagamento inválida!';
            }
    
            //Calcular o valor total
            for(let i = 0; i < codigosDoPedido.length; i++) {
                let index = codigo.indexOf(codigosDoPedido[i]);
                valorTotal = valorTotal + valor[index]*quantidadeDoPedido[i];
            }
    
    //         ### DESCONTOS E TAXAS
    //  - Pagamento em dinheiro tem 5% de desconto
    //  - Pagamento a crédito tem acréscimo de 3% no valor total
            if(metodoDePagamento == 'dinheiro') {
                valorTotal = valorTotal*0.95
            }
            else if(metodoDePagamento == 'credito') {
                valorTotal = valorTotal*1.03
            }
            return `R$ ${valorTotal.toFixed(2).replace('.',',')}`;
        }
    
    }
    
    export { CaixaDaLanchonete };
