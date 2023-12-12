const Product = require('../../model/Product')


const deleteItem = async (req, res) =>{
	try {

		console.log(req.params)

		const product = await Product.destroy({
			where: {
				id: req.params.id,
			},
		})

		res.redirect('/admin')

	} catch (err) {

		res.send(err)

	}

	
} 

module.exports = deleteItem