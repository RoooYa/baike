'use strict'

const mysql = require('../common/mysql');

module.exports = function(app) {

	app.get('/', function(req, res) {

		var page = req.query.page;


		if (!page || page < 1) page = 1;

		var a = (page - 1)*20, b = ((page-1)*20+20);

		var sql = 'SELECT * FROM word ORDER BY word.dataTime DESC LIMIT ' + a + ',' + b;

		mysql(sql, function(err, vals, fields) {
			if (err) throw err;
			res.render('index', vals);
		});
	})
}