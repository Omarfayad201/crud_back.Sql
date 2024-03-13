const { createConnection } = require ("mysql2");
module.exports.query = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_system",
});
