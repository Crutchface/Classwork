// Chris Ferguson - Node JS assignment

// Connects to database using sequelize

const Sequelize = require('sequelize');

// Create connection credentials to db
const sequelize=new Sequelize('informational_website', 'root', 'ninrez', {
    host: 'localhost',
    dialect: 'mysql'
});
// exports the connection to index.js
module.exports= sequelize;