
require('dotenv').config()


const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const sequelize = require('./src/config/connection.js')


require('./src/config/associations.js')

app.use(express.urlencoded({extended: false}))




app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'/public')))

app.use(require('./src/routes/homeRoutes.js'))
app.use(require('./src/routes/adminRoutes.js'))
app.use(require('./src/routes/loginRoutes.js'))
app.use(require('./src/routes/shopRoutes.js'))



const PORT = process.env.PORT || 3000

app.listen(PORT, async () =>{
	
	try{
		
		await sequelize.authenticate()
		await sequelize.sync()
	
	
		console.log(`Server is running on port: ${PORT}`)
		
	}catch(err){
		
		console.log(err)
		
	}
	
	
})