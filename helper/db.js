const knex = require('knex');

module.exports = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'wjdduf12',
    database : 'ohouse_test'
  }
})