const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'localhost',
   port: '3306',
   user: 'appuser',
   password: 'learnIT02#',
   database: 'react_node_app'
});

module.exports = db;
