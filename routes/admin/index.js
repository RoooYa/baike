/**
 * 后台首页-查询文章列表
 * @author hry_588@163.com
 * 
 */

'use strict'

const mysql = require('../common/mysql');
const classify = require('../common/class');

module.exports = function(app) {

	app.get('/admin', function(req, res) {
		// 查询一级分类
		classify.one(function(data) {
			res.render('admin/index', {
				code: 0,
				data: data
			})
		})
	})

	// 查询文章列表
	app.get('/admin/list', function(req, res) {
		var sql = 'select count(id) from word';

		mysql(sql, function(err, vals, fields) {
			if (err) throw err;

			// 获取总条数
			var count = vals[0]['count(id)'];
			var page = req.query.page;
			var t = 10;
			if (!page || page < 1) page = 1;
			var a = (page - 1) * t,
				b = ((page - 1) * t + t);
			var sql = 'SELECT word.id,word.title,word.classId,word.twoClassId,word.readNumber,word.dataTime,word.img,word.`like`, class.`name` AS className, twoclass.`name` AS twoClassName, word.`describe`, word.sourceHref, word.source, word.text FROM word INNER JOIN class ON word.classId = class.id INNER JOIN twoclass ON word.twoClassId = twoclass.id LIMIT ' + a + ',' + b;
			//var sql = 'SELECT * FROM word ORDER BY word.dataTime DESC LIMIT ' + a + ',' + b;
			mysql(sql, function(err, vals, fields) {
				if (err) throw err;
				res.render('admin/list', {
					code: 0,
					number: t,
					count: count,
					page: page,
					data: vals
				});
			});
		})
	})


	app.get('/admin/addword', function(req, res) {
		res.render('admin/addword');
	})

	// 添加文章
	app.post('/admin/word/add', function(req, res) {
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
			//res.json(vals);
			res.redirect('/admin');
		})
	})


	// 删除文章
	app.get('/admin/word/del', function(req, res) {
		var sql = 'delete from word where id = ' + req.query.id;

		mysql(sql, function(err, vals, f) {
			if (err) throw err;
			//res.json(vals);



			res.redirect('/admin');
		})
	})


	// 添加一级分类
	app.get('/admin/class/add', function(req, res) {
		var data = {
			name: req.query.name
		}
		mysql('INSERT INTO class SET ?', data, function(err, vals, f) {
			if (err) throw err;
			res.json({
				code: 0,
				msg: '添加成功'
			});
		})
	})


	// 添加二级分类
	app.get('/admin/twoclass/add', function(req, res) {
		var data = {
			classId: req.query.classId,
			name: req.query.name
		}
		mysql('INSERT INTO twoclass SET ?', data, function(err, vals, f) {
			if (err) throw err;
			res.json({
				code: 0,
				msg: '添加成功'
			});
		})
	})
}