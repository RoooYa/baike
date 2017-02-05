/**
 * 登录
 * @author hry_588@163.com
 * 
 */

'use strict'

const mysql = require('../common/mysql');

module.exports = function(app) {

	app.get('/login', function(req, res) {
		res.render('admin/login')
	})



	// 添加文章
	app.post('/login/set', function(req, res) {
		var data = {
			userName: req.body.userName,
			password: req.body.password
		}
		var userName = 'huangya',
			password = "huangya&zhouting"

		if (data.userName == userName && data.password == password) {
			req.session.login = true;
			res.cookie('i', true);
			res.redirect('/admin');
		}else {
			res.send('您的账号与密码不匹配')
		}
	})



}