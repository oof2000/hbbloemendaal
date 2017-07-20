$(document).ready(function(){

	//vars	
	var header = $('header');
	var section = $('section');
	var aside = $('aside');
	var menu = $('#hamburger');
	var nav = $('header > nav');


	//animsition animation (page)
	$('.animsition').animsition({

		inClass 			: 'fade-in-up-sm',
		outClass 			: 'fade-out-up-sm',
		inDuration			: 1500,
		outDuration			: 800,
		linkElement			: '.animsition-link',
		loading 			: true,
		loadingParentElement: 'body',
		loadingClass		: 'animsition-loading',
		unSupportCss		: [
								'animation-duration',
								'-webkit-animation-duration',
								'-o-animation-duration'
							  ],
		overlay				: false,
		overlayClass		: 'animsition-overlay-slide',
		overlayParentElement: 'body'
	});


	
	// timeline animations
	// if ( document.referrer == null || document.referrer.indexOf(window.location.hostname) < 0 ) {

	// 	TweenLite.from(header, 0.7, { top: '-75px', opacity: 0, delay: 0.8 });
		
	// 	TweenLite.from(section, 0.7, { left: '-5%', opacity: 0, delay: 1.5 });
		
	// 	TweenLite.from(aside, 0.7, { opacity: 0, delay: 2 });

	// }

	$.fn.clicktoggle = function(a, b) {

	    return this.each(function() {

	        var clicked = false;

	        $(this).click(function() {

	            if (clicked) {

	                clicked = false;

	                return b.apply(this, arguments);

	            }

	            clicked = true;

	            return a.apply(this, arguments);

	        });

	    });

	};


	//mobile animation
	$(menu).clicktoggle(function(){

		TweenLite.to(nav, 0.7, {left: 0});	

		menu.addClass('close');

	}, function(){

		TweenLite.to(nav, 0.7, {left: '-100%'});	
				
		menu.removeClass('close');

	});

});

