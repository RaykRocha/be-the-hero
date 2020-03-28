const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knewx(configuration.development);

module.exports = connection;