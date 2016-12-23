'use strict'

const mysql = require('../common/mysql');
const classify = require('../common/class');

module.exports = function(app) {

	app.get('/', function(req, res) {

		var page = req.query.page;

		if (!page || page < 1) page = 1;

		var a = (page - 1) * 15,
			b = ((page - 1) * 15 + 15);

		var sql = 'SELECT * FROM word ORDER BY word.dataTime DESC LIMIT ' + a + ',' + b;

		mysql(sql, function(err, vals, fields) {
			if (err) throw err;
			res.render('index', {
				code: 0,
				data: vals,
				page: page
			})
		})
	})

	app.get('/list', function(req, res) {
		var page = req.query.page;

		if (!page || page < 1) page = 1;

		var a = (page - 1) * 15,
			b = ((page - 1) * 15 + 15);

		var sql = '';

		var classId = req.query.classId;
		var twoClassId = req.query.twoClassId;

		if (classId && !twoClassId) {
			sql = 'SELECT word.id,word.title,word.classId,word.twoClassId,word.readNumber,word.dataTime,word.img,word.`like` FROM word WHERE word.classId = ' + classId + ' LIMIT ' + a + ',' + b;
		}
		if (req.query.classId && req.query.twoClassId) {
			sql = 'SELECT word.id,word.title,word.text,word.classId,word.twoClassId,word.readNumber,word.dataTime,word.`describe`,word.img,word.`like`FROM word WHERE word.classId = ' + classId + ' AND word.twoClassId = ' + twoClassId + ' LIMIT ' + a + ',' + b;
		}

		mysql(sql, function(err, vals, fields) {
			if (err) throw err;
			classify.two(req.query.classId, function(data) {
				res.render('list', {
					code: 0,
					data: vals,
					page: page,
					twoClass: data,
					classId: classId,
					twoClassId: twoClassId
				})
			})

		})
	})
}