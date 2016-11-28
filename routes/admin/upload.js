'use strict'

const multer = require('multer');
const fs = require('fs');


// var upload = multer({
// 	dest: 'static/img/upload/'
// })


var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'static/img/upload/')
	},
	filename: function(req, file, cb) {
		var fileFormat = file.originalname.split('.');
		cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
	}
})

var upload = multer({
	storage: storage
})

module.exports = function(app) {
	app.post('/upload', upload.single('file'), function(req, res) {

		fs.unlink('./' + req.file.path, function() {
			console.log(req.file);
		})
		
	})
}