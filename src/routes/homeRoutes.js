
const express = require('express')
const router = express.Router()
const index = require('../controller/homeController.js')

router.get('/', index)
router.get('/contact', (req,res) => res.send('Esta es la vista de CONTACTO'))
router.get('/about', (req,res) => res.send('Esta es la vista de SOBRE NOSOTROS'))
router.get('/faqs', (req,res) => res.send('Esta es la vista de PREGUNTAS FRECUENTES'))

module.exports = router