

const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const getRegister = require('.././controller/auth/getRegister.js')
const postRegister = require('.././controller/auth/postRegister.js')

const User = require('.././model/User.js')

/* .isStrongPassword({
			minLength: 6,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
			
		}) */

const validations = [

	body('user_name')
		.not()
		.isEmpty()
		.withMessage('Ingrese un nombre')
		.bail()
		.isLength({min: 3})
		.withMessage('El nombre debe tener un minimo de 3 caracteres'),
	body('user_last_name')
		.not()
		.isEmpty()
		.withMessage('Ingrese su apellido')
		.bail()
		.isLength({min: 3})
		.withMessage('El apellido debe tener un minimo de 3 caracteres'),
	body('password')
		.isLength({min: 3})
		.bail()
		.withMessage('La contraseña debe tener un minimo de 3 caracteres')
		.custom((value, {req}) => value === req.body.repassword)
		.withMessage('las contraseñas no coinciden'),
	body('user_email')
		.isEmail()
		.withMessage('El email es obligatorio')
		.bail()
		.custom((value, {req})=>{
			
			return new Promise(async (resolve, reject) =>{
				
				try{
					
					const user = await User.findOne({
						
						where: {
							
							user_email: value
							
						}
						
					})
					
					if(user){
						
						console.log(user)
						return reject()
						
					}else{
						
						return resolve()
						
					}
					
				}catch(err){
					
					console.log(err)
					
				}
				
			})
			
		})
		.withMessage('Este email ya esta en uso'),


]

router.get('/auth/register', getRegister)

router.post('/auth/register', validations, postRegister)


module.exports = router