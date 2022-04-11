"use strict";

var JSUtil = {

	initMobileMenu: function(){
		$(".side-menu-button").on('click', function(e){
			e.preventDefault();
			$('#mobile-menu').toggleClass('active');
		});


		$("#mobile-menu .arrow").on('click', function(e){
			e.preventDefault();
			var $this = $(e.target);
			var $li = $this.closest('li');
			$li.toggleClass('expanded');
			$li.children('.mobile-submenu').slideToggle();
		});
	}
};

(function ($) {

	$('#page-loader').fadeOut(600);

	$('.navbar-toggler').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('clicked');
		$('.navbar-collapse').toggleClass('collapse');
	});

	$('#page-loader').fadeOut(600);

	$("#back-to-top").on("click", function(e){
		e.preventDefault();
		$('html,body').animate({ scrollTop: 0 }, 'ease');
		return false;
	});
	
	$(".widget-4 .widget-4-progress .progress-item a").on('click', function(e){
		e.preventDefault();
		var target = $(this).data("target");
		$(".widget-4 .widget-4-progress-item").removeClass("active");
		$("." + target).addClass("active");
	});

	JSUtil.initMobileMenu();


})(jQuery);