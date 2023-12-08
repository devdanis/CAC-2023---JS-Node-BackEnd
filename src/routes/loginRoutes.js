

const express = require('express')
const router = express.Router()

const getLogin = require('.././controller/auth/getLogin.js')
const postLogin = require('.././controller/auth/postLogin.js')

router.get('/auth/login', getLogin)

router.post('/auth/login', postLogin)



module.exports = router