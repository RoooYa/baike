/**
 * 上传图片
 * @author hry_588@163.com
 * 
 */

'use strict'

const multer = require('multer');
const fs = require('fs');


// var upload = multer({
// 	dest: 'static/img/upload/'
// })

// 允许上传的图片格式
const IMGTYPE = ['jpg', 'png'];

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'static/img/upload/')
	},
	filename: function(req, file, cb) {
		var fileFormat = file.originalname.split('.');
		cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
	}
})

var upload = multer({
	storage: storage
})

module.exports = function(app) {
	app.post('/upload', upload.single('file'), function(req, res) {
		var fileFormat = req.file.originalname.split('.');

		for (let i = 0; i < IMGTYPE.length; i++) {
			if (IMGTYPE[i] == fileFormat[fileFormat.length - 1]) {
				res.json({
					code: 0,
					msg: '上传成功'
				})
				return;
			}
		}

		// 判断上传类型
		fs.unlink('./' + req.file.path, function() {
			res.json({
				code: 100,
				msg: '不支持此上传类型'
			})
		})
	})
}