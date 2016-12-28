define(function(require, exports, module) {
	'use strict';

	var $ = require('jquery');

	$.get('/list/hot', function(data) {
		var data = data.data;
		var html = '';
		for (var i = 0; i < data.length; i++) {
			html+='<li><img src="'+data[i].img+'"/><div class="text"><a href="/item?id='+ data[i].id +'">'+ data[i].title +'</a><span>'+data[i].dataTime+'</span></div></li>'
		}
		$('#hotList').html(html);
	})

});