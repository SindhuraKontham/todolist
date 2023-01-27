const {Pool} = require('pg');

const db = new Pool ({
    connectionString: process.env.CONNECTION_STRING,

});

module.exports = { db };
