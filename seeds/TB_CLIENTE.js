
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_CLIENTE').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_CLIENTE').insert([
        {id: 1, NOME: 'José'},
        {id: 2, NOME: 'Maria'},
        {id: 3, NOME: 'João'},
        {id: 4, NOME: 'Ana' }
      ]);
    });
};
