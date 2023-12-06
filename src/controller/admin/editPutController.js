
const path = require('path')
const sharp = require('sharp')

const Category = require('../.././model/Category.js')
const License = require('../.././model/License')
const Product = require('../.././model/Product.js')

const { validationResult } = require('express-validator')

const editPutController = async (req, res) => {

	const category = await Category.findAll()
	const license = await License.findAll()


	const error = validationResult(req)

	if (!error.isEmpty()) {

		try {

			return res.render('admin/edit', {

				error: error.array(),
				product: { ...req.params, ...req.body },
				category: category,
				license: license

			})

		} catch (err) {

			res.status(500).send(err)

		}
	}


	try {

		if (req.files.length == 2) {

			const [product_front_view, product_box] = req.files.map(file => file.originalname)

			const images = [product_front_view, product_box]

			const product = await Product.update(

				{
					...req.body,
					product_front_view,
					product_box

				},
				{

					where: {

						id: req.params.id

					}

				})

			if (product) {

				let count = 0
				let folder = ''

				license.forEach(license => {

					if (license.license_id == req.body.license_id) {

						folder = license.license_name

					}

				})


				req.files.forEach(file => {

					sharp(file.buffer)
						.resize(600)
						.toFile(
							path.resolve(__dirname, `../../.././public/assets/multimedia/uploads/${folder}/${images[count]}`)
						)

					count++

				})

				res.redirect('/admin')

			} else {

				res.status(500).send('Error al actualizar el producto')

			}



		} else {

			const product = await Product.findOne({

				raw: true,
				attributes: ['product_front_view', 'product_box'],
				where: {
					id: req.params.id
				},
				include: [

					{
						model: License,
						required: true
					}

				]
			})

			const error = [{ msg: 'Las imágenes deben ser dos' }]

			return res.render('admin/edit', {

				error,
				product: { ...req.params, ...req.body, ...product },
				category: category,
				license: license

			})

		}



	} catch (err) {

		res.send(err)

	}


}


module.exports = editPutController