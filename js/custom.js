// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "img/bg1.jpg", 
	 		 "img/bg2.jpg",
			 "img/bg3.jpg"
	 			], 	{duration: 3200, fade: 1100});
		});
})