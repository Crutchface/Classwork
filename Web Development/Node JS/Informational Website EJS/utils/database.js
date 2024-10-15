// Chris Ferguson - Node JS assignment - Database Info 

// Connects to database using sequelize

/**-----------------------
 * !      Schema for mysql
 *------------------------**/

// CREATE SCHEMA `informational_website` ;
// CREATE TABLE `users` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `firstname` varchar(45) NOT NULL,
//   `lastname` varchar(45) NOT NULL,
//   `email` varchar(45) NOT NULL,
//   `phone` int NOT NULL,
//   `city` varchar(45) NOT NULL,
//   `postal` varchar(6) NOT NULL,
//   `message` varchar(240) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

const Sequelize = require('sequelize');
// /**------------------------------------------------------------------------
//  * !                              MY SERVER 
//  *   
//  *------------------------------------------------------------------------**/

// // Create my connection credentials to db
// const sequelize=new Sequelize('informational_website', 'root', 'ninrez', {
//     host: 'localhost',
//     dialect: 'mysql'
// });


/**------------------------------------------------------------------------
 * !                              Sams SERVER 
 *   
 *------------------------------------------------------------------------**/

const sequelize=new Sequelize('CPRG212', 'root', 'Cprg212user', {
    host: 'localhost',
    dialect: 'mysql'
});

// exports the connection to index.js
module.exports= sequelize;