
/* const sequelize = require('.././config/connection.js')*/
const Category = require('../.././model/Category.js')
const License = require('../.././model/License')
const Product = require('../.././model/Product.js')

const editGet = async (req, res) =>{

	try{
		
		/* const [product] = await sequelize.query('SELECT * from products, licenses, categorys WHERE products.id = :id AND products.license_id = licenses.license_id AND products.category_id = categorys.category_id',{
			replacement: { id : id}
		}) */
		
		const product = await Product.findOne({
				
			raw: true,
			where:{
				id: req.params.id
			},
			
			include: [
				{
					model: Category,
					required: true
				},
				{
					model: License,
					required: true
				}
			],
		
			
		})
		
		if(product){
			
			const category = await Category.findAll({raw: true})
			const license = await License.findAll({raw: true})
			
			res.render('admin/edit', {product, category, license})
			
		}else{
			
			res.status(404).send('el producto no existe')
			
		}
	
	
		
		
	
	}catch(err){
		
		res.send(err)
		
	}
	
	
	

}


module.exports = editGet