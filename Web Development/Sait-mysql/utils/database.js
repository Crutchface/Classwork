const mysql = require("mysql2")

// Creating my connection
const con=mysql.createConnection({
    host: 'localHost',
    user: 'root',
    database: 'sat-db',
    password: 'ninrez'
});

// Exporting connection
module.exports = con;