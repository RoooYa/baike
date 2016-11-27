'use strict'


const mysql = require('../common/mysql');

module.exports = function(app) {

	app.get('/admin', function(req, res) {

		res.render('admin/index', {});
	})
}