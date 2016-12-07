/**
 * 查询所有分类公共方法
 * @author hry_588@163.com
 * 
 */
'use strict'

const mysql = require('../common/mysql');

var classify = {
	// 查询所有一级分类
	one: function(fn) {
		mysql('SELECT * FROM class', function(err, vals, f) {
			if (err) throw err;
			fn(vals)
		})
	},

	// 根据一级分类下二级分类
	two: function(id, fn) {
		mysql('SELECT * FROM twoclass WHERE twoclass.classId =' + id, function(err, vals, f) {
			if (err) throw err;
			fn(vals);
		})
	}
}

module.exports = classify;