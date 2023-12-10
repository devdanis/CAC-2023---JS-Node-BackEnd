
const bcrypt = require('bcryptjs')
const User = require('../.././model/User.js')

const { validationResult } = require('express-validator')

const postRegister = async (req, res) => {
	
	
	const error = validationResult(req)
	
	
		
	if(!error.isEmpty()){
		
		return res.render('auth/register', { values : req.body, error: error.array() })
		
	}
	 
		
	
		
	try{	
	
		const user = await User.create(req.body)
		
		console.log(user)
		
		res.redirect('/')
		
	}catch(err){
		
		res.send(err)
		
	}
	

	
	
}

module.exports = postRegister