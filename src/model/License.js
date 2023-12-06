const { DataTypes } = require('sequelize')
const sequelize = require('.././config/connection.js')


const License = sequelize.define('license', {

	license_id: {
		
		type: DataTypes.INTEGER,
		autoIncrement:true,
		required: true,
		allowNull: false,
	    primaryKey: true
		
	},
    license_name: {

        type: DataTypes.STRING,
        allowNull: false

    }

}, {timestamps: false})



module.exports = License