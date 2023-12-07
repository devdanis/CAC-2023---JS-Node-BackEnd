
const express = require('express')
const router = express.Router()

const editGet = require('.././controller/admin/editGetController.js')
const editPut = require('.././controller/admin/editPutController.js')
const getAdmin = require('.././controller/admin/getAdminController.js')
const getCreate = require('.././controller/admin/getCreateController.js')
const postCreate = require('.././controller/admin/postCreateController.js')
const deleteItem = require('.././controller/admin/deleteItemController.js')

const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
 
 const { body } = require('express-validator')
 
 
 const validations = [
 
	body('category_id').not().isEmpty().withMessage('La categoria no puede estar vacio'),
	body('license_id').not().isEmpty().withMessage('La licensia no puede estar vacio'),
	body('name').not().isEmpty().withMessage('Ingrese un nombre').bail().isLength({min: 3}).withMessage('El nombre debe tener mas de 3 caracteres'),
	body('description').not().isEmpty().withMessage('Ingrese una descripción'),
	body('SKU').not().isEmpty().withMessage('El SKU no puede estar en blanco').bail().isLength({min: 3}).withMessage('El SKU debe tener mas de 3 caracteres'),
	body('price').not().isEmpty().withMessage('Ingrese el precio del producto'),
	body('stock').not().isEmpty().withMessage('Ingrese el stock'),
	body('discount').not().isEmpty().withMessage('Ingrese un descuento'),
	body('dues').not().isEmpty().withMessage('Ingrese una cuota')
 
 
 ]

router.get('/admin', getAdmin)

router.get('/admin/create', getCreate)

router.post('/admin/create', postCreate)

router.get('/admin/edit/:id', editGet)

router.put('/admin/edit/:id', upload.array('images'), validations, editPut)

router.delete('/admin/delete/:id', deleteItem)

module.exports = router
