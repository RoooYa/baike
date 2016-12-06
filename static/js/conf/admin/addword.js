define(function(require, exports, module) {

	'use strict';

	var $ = require('jquery'),
		_ = require('bootstrap');


	function uploadFile(){
		var file = document.getElementById("file")
		var formData = new FormData();
		formData.append('file',file.files[0]);
		$.ajax({
			url: '/upload',
			type: 'POST',
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data) {
				var url = '/img/upload/' + data.datas[0].url;
				
				$('#img').attr('src', url);

				$('[name="img"]').val(url);
			}
		})
	}
	$('#file').on('change', uploadFile);


})