// Import Datatypes
const {DataTypes}= require('sequelize');

// Import connection 
const sequelize=require('../utils/database-seq');

// creating the model
const Registration = sequelize.define('Registration', {
    student_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    course_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    grade:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
},{
    freezeTableName: true,
    timestamps: false
});

Student.hasMany(Registration, {foreignKey: 'student_id'})

module.exports = Registration;
