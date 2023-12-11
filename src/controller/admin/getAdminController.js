const Product = require('../.././model/Product.js')
const License = require('../.././model/License')

const getAdmin = async (req, res) => {
try {
	const product = await Product.findAll({
		raw: true,
		include: [			
			{
				model: License,
				required: true
			}
		],
	})
	console.log (product)
	res.render ('admin/admin', {product})
}catch(err){
		
	res.send(err)
	
}
	
}


module.exports = getAdmin