define(function(require, exports, module) {

	'use strict';

	var $ = require('jquery');

	$('#setWord').on('click', function() {
		$.ajax({
		   type: "GET",
		   url: "/word/add",
		   data: {
		   		word: $('#wordText').val()
		   },
		   success: function(data) {
		     if (data.code == 0) {
		     	$('#wordText').val('');
		     	var html = '<div class="item-list animation"><div class="img"><img class="user-image" src="/img/userimg.jpg"></div><div class="word overflow-hidden"><i class="iconfont">&#xe609;</i><div class="hd">'+ data.data[0].userName +'</div><div class="bd">'+ data.data[0].word +'</div><div class="ft overflow-hidden"><ul class="float-right"><li>分享</li><li>评论(0)</li></ul></div></div></div>';
		     	$('#jTextarea').after(html)
		     }else {
		     	alert(data.msg)
		     }
		   }
		});
	})
})