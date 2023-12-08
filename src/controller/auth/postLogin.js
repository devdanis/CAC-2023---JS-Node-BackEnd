

const postLogin = (req, res) => {
	
	console.log(req.body)
	
	res.redirect('/shop')
	
}


module.exports = postLogin