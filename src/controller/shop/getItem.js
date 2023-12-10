

const getItem = (req, res) => {
	
	console.log(req.params.id)
	
	res.send('item')
	
}

module.exports = getItem