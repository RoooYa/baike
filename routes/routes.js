
'use strict'



const index = require('./index');

const admin = require('./admin/index');

const upload = require('./admin/upload');

module.exports = function(app) {
	// 
	admin(app);

	// 
	index(app);

	// 
	upload(app)
}