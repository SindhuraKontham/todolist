const {Pool} = require('pg');

const db = new Pool ({
    connectionString: 'postgres://nbeurfkp:bZ_uzfgQeAhfl8Xu9-lnnMrB2e-VZEoE@snuffleupagus.db.elephantsql.com/nbeurfkp'
});

module.exports = { db };
