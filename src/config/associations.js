const sequelize = require('.././config/connection.js')

const Product = require('.././model/Product.js')
const Category = require('.././model/Category.js')
const License = require('.././model/License.js')


/* Product.hasOne(License, {foreignKey: 'license_id'});
Product.hasOne(Category, {foreignKey: 'category_id'});
 */
Product.belongsTo(License,{foreignKey: 'license_id'});
Product.belongsTo(Category,{foreignKey: 'category_id'});


