
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PRODUTO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PRODUTO').insert([
        {id: 1, DESCRICAO: 'Arroz', PRECO: 5.54},
        {id: 2, DESCRICAO: 'Feijão', PRECO: 8.90},
        {id: 3, DESCRICAO: 'Macarrão', PRECO: 6.00},
        {id: 4, DESCRICAO: 'Oleo de Soja', PRECO: 5.00}
      ]);
    });
};
