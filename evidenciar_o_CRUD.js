const knex = require('knex') ({
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
})

knex.select('NOME').table('TB_CLIENTE').then(data => {
    console.log(data)
}).catch(error => console.log(error))

knex.select('DESCRICAO', 'PRECO').table('TB_PRODUTO').then(data => {
    console.log(data)
}).catch(error => console.log(error))

knex.select('DATA_PEDIDO').table('TB_PEDIDO').then(data => {
    console.log(data)
}).catch(error => console.log(error))

knex.select('QUANIDADE', 'VALOR_ITEM').table('TB_PEDIDO_PRODUTO').then(data => {
    console.log(data)
}).catch(error => console.log(error))


 