
exports.up = function(knex) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.increments('ID').primary()
        table.string('DESCRICAO').notNull()
        table.float('PRECO').notNull()
     });
    };

exports.down = function(knex) {
    return knex.schema.dropTable('TB_PRODUTO')
};
