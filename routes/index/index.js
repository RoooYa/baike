'use strict'

const mysql = require('../common/mysql');
const classify = require('../common/class');

module.exports = function(app) {

	// 首页
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

	// 列表也
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

	// 详情页
	app.get('/item', function(req, res) {
		mysql('SELECT * FROM word WHERE word.id = ' + req.query.id, function(err, vals, fields) {
			if (err) throw err;
			res.render('item', {
				code: 0,
				data: vals
			})
			mysql('update word set word.readNumber = word.readNumber+1 where id = ' + req.query.id, function(err, vals, fields) {
				if (err) throw err;
			})

		})
	})

	// 喜欢
	app.get('/item/like', function(req, res) {
		mysql('update word set word.like = word.like+1 where id = ' + req.query.id, function(err, vals, fields) {
			if (err) throw err;
			res.json({
				code: 0
			})
		})
	})

	// top
	app.get('/list/hot', function(req, res) {
		mysql('SELECT * FROM word ORDER BY word.readNumber DESC LIMIT 0, 5', function(err, vals, fields) {
			if (err) throw err;
			res.json({
				code: 0,
				data: vals
			})
		})
	})
}