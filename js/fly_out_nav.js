$(function(){
	// Navigation touch events
	var nav_slide_px = 262;
	var div_body = $('div#body');
	var left_nav = $('.mobile-left-nav');
	var right_nav = $('.mobile-right-nav');

	var show_left_nav = function() {
		div_body.css({'marginLeft' : '262px'});
		left_nav.css({'zIndex' : '1'});
		
		$('.overlay').css({'left' : nav_slide_px, 'right' : 0}).show();
	};
	
	var hide_left_nav = function() {
		div_body.css({'marginLeft' : '0'});
		left_nav.css({'zIndex' : '0'});
		
		$('.overlay').hide().css({'left' : 0, 'right' : 0});
	};
	
	var show_right_nav = function() {
		div_body.css({'marginLeft' : '-262px'});
		right_nav.css({'zIndex' : '1'});
		
		$('.overlay').css({'left' : '0', 'right' : nav_slide_px}).show();
	};
	
	var hide_right_nav = function() {
		div_body.css({'marginLeft' : '0'});
		right_nav.css({'zIndex' : '0'});
		
		$('.overlay').hide().css({'left' : 0, 'right' : 0});
	};
				
	$('.mobile-nav').hammer({ prevent_default: true });
	$('.mobile-nav a').hammer({ prevent_default: false }).bind('touchend', function() {
		window.location.href = $(this).attr('href');
	});
	
	// Deal with profile button touches / swipes
	$('.mobile-left-button').hammer({ prevent_default: true }).bind('click touchstart swipe', function(ev){
		if (parseInt(div_body.css('marginLeft'), 10) == nav_slide_px) {
			hide_left_nav();
		} else {
			show_left_nav();
		}
		
		return;
	});
	
	// Deal with nav button touches / swipes
	$('.mobile-right-button').hammer({ prevent_default: true }).bind('click touchstart swipe', function(ev){
		if (parseInt(div_body.css('marginLeft'), 10) == '-' + nav_slide_px) {
			hide_right_nav();
		} else {
			show_right_nav();
		}
		
		return;
	});	
	
	$('.overlay').hammer().bind('touchstart dragstart swipe', function(ev){
		ev.preventDefault();
		ev.stopPropagation();
		if (parseInt(div_body.css('marginLeft'), 10) == nav_slide_px) {
			hide_left_nav();
		} else if (parseInt(div_body.css('marginLeft'), 10) == '-' + nav_slide_px) {
			hide_right_nav();
		}
		return;
	});
	
	// Non touch events
	$('.mobile-left-button').bind('click', function(){
		if (parseInt(div_body.css('marginLeft'), 10) == nav_slide_px) {
			hide_left_nav();
		} else {
			show_left_nav();
		}
		
		return;
	});
	
	$('.mobile-right-button').bind('click', function(ev){
		if (parseInt(div_body.css('marginLeft'), 10) == '-' + nav_slide_px) {
			hide_right_nav();
		} else {
			show_right_nav();
		}
		
		return;
	});
	
	$('body').on('click', '.overlay', function(ev){
		ev.preventDefault();
		ev.stopPropagation();
		if (parseInt(div_body.css('marginLeft'), 10) == nav_slide_px) {
			hide_left_nav();
		} else if (parseInt(div_body.css('marginLeft'), 10) == '-' + nav_slide_px) {
			hide_right_nav();
		}
		return;
	});
});