/**
 * 文章分类
 * @author hry_588@163.com
 * 
 */

'use strict'

const mysql = require('../common/mysql');
const classify = require('../common/class');

module.exports = function(app) {

	// 查询所有分类
	app.get('/ajax/class/list', function(req, res) {
		classify.one(function(data) {
			res.json({
				code: 0,
				data: data
			});
		});
	})

	// 根据一级分类查询二级分类
	app.get('/ajax/class/twolist', function(req, res) {
		var id = req.query.id;
		classify.two(id, function(data) {
			res.json({
				code: 0,
				data: data
			})
		})
	})

	// 添加一级分类
	app.post('/class/add', function(req, res) {



	})
}