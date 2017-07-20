$(document).ready(function(){


	// VARS
	var header = $('header');
	var menuItem = $('nav li');
	var section = $('section');
	var overlay = $('#overlay');
	var footer = $('footer');


	// SET SESSIONNNNNNNNNN
	var visit;

	if(visit == null){

		// 0-6 sec 
		TweenLite.to(overlay, 2, { opacity: 1, top:'25%'});
		TweenLite.to(overlay, 1, { opacity: 0, delay:3});
		TweenLite.from(header, 1, { top:'-15%', delay:3.5});
		TweenMax.staggerFrom(menuItem,1,{opacity:0, delay: 4.2},0.20)		
		TweenLite.from(section, 1.5, { opacity: 0, delay:4.5});

		visit = 1;

		console.log('ANIMATION');

	} else {

		console.log('NO ANIMATION');

	}

	// MENU ACTIVE
	$(function(){
   		var url = window.location.href;
   		var page = url.substr(url.lastIndexOf('/')+1);
   		$('li > a[href*="'+page+'"]').addClass('active');
	});

});