
const { DataTypes } = require('sequelize')
const sequelize = require('.././config/connection.js')


const User = sequelize.define('user', {
	
	user_id: {
		
		type: DataTypes.INTEGER,
		autoIncrement:true,
		required: true,
		allowNull: false,
	    primaryKey: true
		
	},
	
	user_name:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	},
	user_last_name:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	},
	user_email:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	},
	
	user_password:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	}
	
	
}, {timestamps: false})


module.exports = User