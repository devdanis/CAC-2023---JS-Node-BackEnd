
const express = require('express')
const router = express.Router()
const getShop = require('.././controller/shop/getShopController.js')



router.get('/shop', getShop)

module.exports = router