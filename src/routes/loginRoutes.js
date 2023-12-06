
const express = require('express')
const router = express.Router()



router.get('/auth/login', (req, res) =>{
	
	res.render('auth/login')
	
})

router.post('/auth/login', (req, res) => {
	
	res.send('post login')
	
})



module.exports = router