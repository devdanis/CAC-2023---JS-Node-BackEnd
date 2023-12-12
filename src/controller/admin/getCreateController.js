const Category = require('../.././model/Category')
const License = require('../.././model/License')
const Product = require('../.././model/Product.js')

const getCreate = async (req, res) =>{
	try {
		const category = await Category.findAll()
		const license = await License.findAll()
		res.render('admin/create', {category, license})
	} catch (err) {
		res.send(err)
	}
	
}

module.exports = getCreate