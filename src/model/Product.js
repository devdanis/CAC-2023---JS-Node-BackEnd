
const { DataTypes } = require('sequelize')
const sequelize = require('.././config/connection.js')
const Category = require('./Category.js')
const License = require('./License.js')

const Product = sequelize.define('product', {
	
	name:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	},
	description:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	},
	SKU:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	},
	price:{
		
		type: DataTypes.INTEGER,
		allowNull: false
		
	},
	stock:{
		
		type: DataTypes.INTEGER,
		allowNull: false
		
	},
	discount:{
		
		type: DataTypes.INTEGER,
		allowNull: false
		
	},
	dues:{
		
		type: DataTypes.INTEGER,
		allowNull: true
		
	},
	product_front_view:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	},
	product_box:{
		
		type: DataTypes.STRING,
		allowNull: false
		
	}
	
}, {timestamps: false});

/* Category.hasOne(Product);
License.hasOne(Product);



Product.belongsTo(Category);
Product.belongsTo(License);
 */



module.exports = Product