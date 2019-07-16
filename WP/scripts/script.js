$(document).ready(function(){
// function for sub navigation active
	function border_active(){
		var active_positon = $('.sub_navigation_active').children('a').position().left;
		var active_width = $('.sub_navigation_active').children('a').outerWidth();
		$('.sub_navigation_active_border').css({'marginLeft':active_positon,'width':active_width});
	}
	$(window).on('load resize', border_active);


// sub navigation active border
	$('.sub_navigation li a').click(function(){
		$(this).parent('li').addClass('sub_navigation_active').siblings().removeClass('sub_navigation_active');
		var element_position = $(this).position().left;
		var element_width = $(this).outerWidth();
		$('.sub_navigation_active_border').css({'marginLeft':element_position,'width':element_width});
	});


// header layout border active{
  $('.header_layout_navigation li').click(function(){
    $(this).addClass('header_layout_active').siblings().removeClass('header_layout_active');
  });


// change of styles while reaching navbar    
  	var scroll_start = 0;
  	var fromtop = 150;
   function change_style() { 
  		scroll_start = $(this).scrollTop();
    	if(scroll_start > $('.header_content p').offset().top-fromtop) {
    		$('#header_navigation').addClass('styles_change');
    	} else {
    		$('#header_navigation').removeClass('styles_change');
    	}
   	}
   	$(window).on('load scroll', change_style);


// scroll to id
 	$('.navbar li a, footer ul li a').on('click', function(e) {
 		e.preventDefault();
    	var target = $(this.getAttribute('href'));
    	if( target.length !="") {
        	$('html, body').animate({
           		scrollTop: target.offset().top-fromtop
        	}, 500);
    	}
  	});


// animation
	var animation_elements = $('.viewport_animation');

  	function check_visible() {
    	var window_height = $(window).height();
    	var window_top_position = $(window).scrollTop();
    	var window_bottom_position = (window_top_position + window_height);

    	$.each(animation_elements, function() {
      		var element = $(this);
      		var element_height = element.outerHeight();
      		var element_top_position = element.offset().top+fromtop;
     		var element_bottom_position = (element_top_position + element_height);

      		if ((element_bottom_position >= window_top_position) &&
        		(element_top_position <= window_bottom_position)) {
        		element.addClass('slideup');
      		}
    	});
  	}
 	$(window).on('scroll resize', check_visible);


// navigation responsive bar control
  $('.navigation_control').click(function(){
    $(this).parent('#header_navigation').toggleClass('navbar_opened');
  });

    
// background video
  $('.play_demo').click(function(){
    $('#header_background_video').show().attr('src',"https://www.youtube.com/embed/d4JnshyKOOQ?autoplay=1&playlist=d4JnshyKOOQ&loop=1&controls=0;rel=0&amp;showinfo=0&amp;modestbranding=1");
  });
});