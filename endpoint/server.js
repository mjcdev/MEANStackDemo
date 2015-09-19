var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function(req, res) {
	res.json([
		{
			username:'mjcdev',
			body: 'learning some node'
		}
	])
})

app.post('/api/posts', function (req, res) {
	console.log('post received')
	console.log(req.body.username)
	console.log(req.body.body)
	res.sendStatus(201)
})

app.listen(3000, function() {
	console.log('Server listening on', 3000)
})