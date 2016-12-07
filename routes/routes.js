
'use strict'



const index = require('./index');

const admin = require('./admin/index');

const upload = require('./admin/upload');

const wordClass = require('./admin/wordClass');

module.exports = function(app) {
	// 
	admin(app);

	// 
	index(app);

	// 
	upload(app);

	// 
	wordClass(app);
}