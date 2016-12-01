/**
 * 后台首页-查询文章列表
 * @author hry_588@163.com
 * 
 */

'use strict'

const mysql = require('../common/mysql');

module.exports = function(app) {

	app.get('/admin', function(req, res) {

		var sql = 'select count(id) from word';

		mysql(sql, function(err, vals, fields) {
			if (err) throw err;

			// 获取总条数
			var count = vals[0]['count(id)'];

			var page = req.query.page;
			if (!page || page < 1) page = 1;
			var a = (page - 1) * 20,
				b = ((page - 1) * 20 + 20);
			var sql = 'SELECT * FROM word ORDER BY word.dataTime DESC LIMIT ' + a + ',' + b;
			mysql(sql, function(err, vals, fields) {
				if (err) throw err;

				// res.json({
				// 	code: 0,
				// 	count: count,
				// 	page: page,
				// 	data: vals
				// });


				res.render('admin/index', {
					code: 0,
					count: count,
					page: page,
					data: vals
				});
			});
		})
	})

	app.get('/admin/addword', function(req, res){
		res.render('admin/addword', {});
	})

	app.get('/admin/word/add', function(req, res) {
		var data = {
				title: req.body.title,
				text: req.body.text,
				classId: req.body.classId,
				twoClassId: req.body.twoClassId,
				source: req.body.source,
				sourceHref: req.body.sourceHref,
				describe: req.body.describe,
				img: req.body.img,
			}
		
		mysql('INSERT INTO word SET ?', data, function(err, vals, f) {
			if (err) throw err;
			res.json(vals);
		})
	})
}