
exports.up = function(knex) {
    return knex.schema.createTable('TB_PEDIDO', table => {
        table.increments('id').primary()
        table.string('DATA_PEDIDO').notNull()
        table.int('CLIENTE_ID').notNull().unique()

        table.foreign('CLIENTE_ID').references('TB_CLIENTE.ID')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_PEDIDO')
};
