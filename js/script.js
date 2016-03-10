$(document).ready(function(){
	$(window).scroll(function(){
		var element = document.getElementById('nav-wrapper');
	    var elemRect = element.getBoundingClientRect(),
	   	var offset   = elemRect.top - top;

		console.log('Element is ' + offset + ' vertical pixels from <body>');
	});
});