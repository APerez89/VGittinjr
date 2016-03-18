$(document).ready(function(){
	$(window).bind('scroll', function(){
		var navHeight = $(window).height() - 50;
			if ($(window).scrollTop() > navHeight) {
				$('.nav-wrapper').addClass('fixed');
			}
			else {
				$('.nav-wrapper').removeClass('fixed');
			}
	});
});
