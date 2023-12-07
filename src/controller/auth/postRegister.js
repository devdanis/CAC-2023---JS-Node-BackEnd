
const bcrypt = require('bcryptjs')


const { validationResult } = require('express-validator')

const postRegister = (req, res) => {
	
	
	const error = validationResult(req)
	
	try{
		
		if(!error.isEmpty()){
		
			return res.render('auth/register', { values : req.body, error: error.array() })
		
		}
	
		
	}catch(err){
		
		res.send(err)
		
	}
	

	res.send('registered')
	
}

module.exports = postRegister