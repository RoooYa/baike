define(function(require, exports, module) {
	'use strict';

	var $ = require('jquery');
	var _ = require('../common');

	$('#jLike').on('click', function() {
		$(this).css('color', '#ff5252')
		$.get('/item/like', {
			id: $(this).attr('data-id')
		}, function(data) {
			
		})
	})

});