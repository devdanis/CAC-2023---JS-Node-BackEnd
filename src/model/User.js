
const { DataTypes } = require('sequelize')

const bcrypt = require('bcryptjs')
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

User.beforeSave(async (user, options) => {
	
	const { user_password } = user
	
	const hash = await bcrypt.hash(user_password, 12)
	
	user.user_password = hash
	
})

module.exports = User