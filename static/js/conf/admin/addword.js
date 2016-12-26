define(function(require, exports, module) {

	'use strict';

	var $ = require('jquery'),
		_ = require('bootstrap');


	function uploadFile() {
		var file = document.getElementById("file")
		var formData = new FormData();
		formData.append('file', file.files[0]);
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


	$.get('/ajax/class/list', function(data) {
		var data = data.data;
		var html = '<option>请选择</option>';
		for (var i = 0; i < data.length; i++) {
			html += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
		};
		$('#classOne').html(html);
	})

	$('body').on('change', '#classOne', function() {
		var id = $(this).val();
		$.get('/ajax/class/twolist', {
			id: id
		}, function(data) {
			var data = data.data;
			var html = '<option>请选择</option>';
			for (var i = 0; i < data.length; i++) {
				html += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
			};
			$('#classTwo').html(html);
		})
	})


	var editor = new wangEditor('textarea');
    editor.create();
})