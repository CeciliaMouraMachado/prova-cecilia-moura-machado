
exports.up = function(knex) {
    return knex.schema.createTable('TB_PEDIDO_PRODUTO', table => {
        table.increments('ID').primary()
        table.int('PEDIDO_ID').notNull()
        table.int('PRODUTO_ID').notNull()
        table.int('QUANTIDADE').notNull()
        table.float('VALOR_ITEM').notNull()

        table.foreign('PEDIDO_ID').references('TB_PEDIDO.ID')

        table.foreign('PRODUTO_ID').references('TB_PRODUTO.ID')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_PEDIDO_PRODUTO')
};
