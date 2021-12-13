
exports.up = function(knex) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('ID').primary()
        table.string('NOME').notNull()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_CLIENTE')
};
