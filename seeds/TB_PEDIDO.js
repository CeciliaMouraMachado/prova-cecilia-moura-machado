
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PEDIDO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PEDIDO').insert([
        {id: 1, DATA_PEDIDO: '10/02/2021', CLIENTE_ID: 1},
        {id: 2, DATA_PEDIDO: '20/05/2021', CLIENTE_ID: 2}
      ]);
    });
};
