const { request } = require('express')
const Category = require('../.././model/Category')
const License = require('../.././model/License')
const Product = require('../.././model/Product.js')

const {validationResult} = require('express-validator')

const postCreate = async (req, res) => {
	try {
		console.log (req.body, req.files)
		const category = await Category.findAll()
		const license = await License.findAll()
		const error = validationResult(req)
		if(!error.isEmpty()){
			return res.render('admin/create', {error: error.array(), license, category})
			
		}
		
	} catch(err) {
		res.send(err)
	}
	
}

module.exports = postCreate