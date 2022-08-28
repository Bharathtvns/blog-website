const Pool_1 = require("pg").Pool;

const pool_1 = new Pool_1({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "auth"
});

module.exports = pool_1;