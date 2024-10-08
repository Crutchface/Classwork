// Import Datatypes
const {DataTypes}= require('sequelize');

// Import connection 
const sequelize=require('../utils/database-seq');

// creating the model
const Courses = sequelize.define('Courses', {
    coursename:{
        type: DataTypes.STRING,
        allowNull: false
    },
    reference:{
        type: DataTypes.STRING,
        allowNull: false
    },
    teacher:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
},{
    timestamps: false
});
module.exports = Courses;
