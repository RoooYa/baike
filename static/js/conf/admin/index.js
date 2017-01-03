$(function() {

	'use strict';

	var className = $('#className a');
	className.on('click', function() {
		var _this = $(this),
			id = _this.attr('data-id');
		className.removeClass('act');
		_this.addClass('act');
		if (id) {
			$.get('/ajax/class/twolist', {
				id: id
			}, function(data) {
				var data = data.data,
					html = '',
					len = data.length;
				for (var i = 0; i < len; i++) {
					html += '<a href="#">' + data[i].name + '</a>';
				};
				html += '<span id="addTwoClass">添加分类</span>';
				$('#classTwoName').show().find('.bd').html(html);
				$('#addTwoClass').popover({
					html: true,
					content: '<form class="form-inline" id="twoClassform"><div class="form-group"><input type="hidden" name="classId" value="' + id + '"><input name="name" class="form-control" placeholder="二级类名"></div><button type="button" class="btn btn-success" id="jAddTwoClass">确定</button></form>'
				})
			})
		} else {
			$('#classTwoName').hide();
		}
	})

	$('#addClass').popover({
		html: true,
		content: '<form id="classFrom" class="form-inline" role="form"><div class="form-group"><input type="text" name="name" class="form-control" placeholder="类名"/></div><button type="button" class="btn btn-success" id="jAddClass">确定</button></form>'
	})


	$('body').on('click', '#jAddClass', function() {
		var name = $('#classFrom [name="name"]').val();
		if (name) {
			$.get('/admin/class/add', $('#classFrom').serialize(), function() {
				window.location.reload();
			})
		} else {
			alert('类名不能为空');
		}
	})

	$('body').on('click', '#jAddTwoClass', function() {
		var name = $('#twoClassform [name="name"]').val();
		if (name) {
			$.get('/admin/twoclass/add', $('#twoClassform').serialize(), function() {
				window.location.reload();
			})
		} else {
			alert('类名不能为空');
		}
	})

})