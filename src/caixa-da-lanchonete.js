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
