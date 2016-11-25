define(function(require, exports, module) {

	'use strict';

	var $ = require('jquery');

	$('#login').on('click', function() {
		$.ajax({
		   type: "GET",
		   url: "/get/login",
		   data: $('#loginForm').serialize(),
		   success: function(data) {
		     if (data.code == 0) {
		     	window.location.href = '/';
		     }else {
		     	alert(data.msg)
		     }
		   }
		});
	})
})