// Kameleon Template
//Author: Chris Mooney (http://themeforest.net/user/ChrisMooney)

// Cufon Setup
jQuery(document).ready(function($) {


//Portfolio Hover Effect
	$('.portfolio-small li img, .portfolio-list li img').hover(function() {
		
		$(this).children('a').show();
		$('.portfolio-small li img, .portfolio-list li img').stop().animate({ opacity: .5 }, 300);
		$(this).stop().css('opacity', 1);
		
	}, function() {
		$('.portfolio-small li img, .portfolio-list li img').stop().animate({ opacity: 1 }, 300);
		
	});

// Tipsy Tooltips
$('.tooltip').tipsy({fade: true});
$('.tooltip.north').tipsy({fade: true, gravity: 's'});
$('.tooltip.east').tipsy({fade: true, gravity: 'w'});
$('.tooltip.west').tipsy({fade: true, gravity: 'e'});
// Form Tooltips
$('form [title]').tipsy({fade: true, trigger: 'focus', gravity: 'w'});	

	 
}); 
