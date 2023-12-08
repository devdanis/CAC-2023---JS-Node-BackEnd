
const express = require('express')
const router = express.Router()
const getShop = require('.././controller/shop/getShopController.js')
const getItem = require('.././controller/shop/getItem.js')

router.get('/shop', getShop)

router.get('/shop/item/:id', getItem)

module.exports = router