const Sequelize = require('sequelize');

// Create connection credentials to db
const sequelize=new Sequelize('sat-db', 'root', 'ninrez', {
    host: 'localhost',
    dialect: 'mysql'
});
// exports the connection
module.exports= sequelize;


