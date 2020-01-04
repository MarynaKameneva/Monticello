//$.scrollTo($('#aboutus'), 4000, {'offset':100});
$.scrollTo($('#projects'), 4000, {'offset':2000});
//$.scrollTo($('#news'), 4000, {'offset':100});
//$.scrollTo($('#contact'), 4000, {'offset':100});


$(function() {
    var $page = $('#projects');
	$('a[href*="#projects"]').click(function() {
		$page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
});

