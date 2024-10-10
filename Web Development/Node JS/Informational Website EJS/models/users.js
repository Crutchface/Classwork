// Import Datatypes
const {DataTypes}= require('sequelize');

// Import connection 
const sequelize=require('../utils/database');

// creating the model
const User = sequelize.define('User', {
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    postal:{
        type: DataTypes.STRING,
        allowNull: false
    },
    message:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});
module.exports = User;
