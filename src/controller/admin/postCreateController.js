const { request } = require('express')
const Category = require('../.././model/Category')
const License = require('../.././model/License')
const Product = require('../.././model/Product.js')
const sharp = require ('sharp')
const path = require('path')


const {validationResult} = require('express-validator')


const postCreate = async (req, res) => {
	try {
		
		const category = await Category.findAll()
		const license = await License.findAll()
		const error = validationResult(req)
		if(!error.isEmpty()){
			return res.render('admin/create', {
				error: error.array(), 
				product: { ...req.body },
				license,
				category})			
		}
		if(req.files.length == 2 ) {
			console.log (req.files)
			const [product_front_view, product_box] = req.files.map(file => file.originalname)
			const images = [product_front_view, product_box]

			const product = await Product.create({...req.body, product_front_view, product_box})

			
			res.redirect('/admin')
		} else {
			const error = [{ msg : 'Las imágenes deben ser 2'}]
			return res.render('admin/create', {
				error: error, 
				product: { ...req.body },
				license,
				category})
		}
	} catch(err) {
		res.send(err)
	}
	
}

module.exports = postCreate