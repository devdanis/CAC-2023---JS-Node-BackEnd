const { DataTypes } = require('sequelize')
const sequelize = require('.././config/connection.js')
const Product = require('./Product.js')

const Category = sequelize.define('category',{

	category_id:{
		
		type: DataTypes.INTEGER,
		autoIncrement:true,
		required: true,
		allowNull: false,
		primaryKey: true
		
	},

    category_name:{

        type: DataTypes.STRING,
        allowNull: false

    }

}, {timestamps: false})


module.exports = Category