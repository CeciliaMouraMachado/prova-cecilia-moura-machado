
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PEDIDO_PRODUTO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PEDIDO_PRODUTO').insert([
        {id: 1, PEDIDO_ID: 1, PRODUTO_ID: 1, QUANTIDADE: 10, VALOR_ITEM: '10 x 5,54'},
        {id: 2, PEDIDO_ID: 1, PRODUTO_ID: 2, QUANTIDADE:10, VALOR_ITEM: '10 x 8,90'},
        {id: 3, PEDIDO_ID: 2, PRODUTO_ID: 3, QUANTIDADE: 5, VALOR_ITEM: '5 x 6,00'},
        {id: 4, PEDIDO_ID: 2, PRODUTO_ID: 4, QUANTIDADE: 5, VALOR_ITEM: '5 x 5,00'}
      ]);
    });
};
