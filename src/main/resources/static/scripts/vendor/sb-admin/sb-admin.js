
  var jQuery = $.noConflict();
  jQuery( document ).ready(function( $ ) {
	  // Toggle the side navigation
	  jQuery(document).on('click', 'a#sidenavToggler', function(event) {
		  event.preventDefault();
	    jQuery("body").toggleClass("sidenav-toggled");
	    jQuery(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
	    jQuery(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
	  });
	// Force the toggled class to be removed when a collapsible nav link is clicked
	  jQuery(document).on('click', 'a.nav-link-collapse', function(event) {
	      event.preventDefault();
	    jQuery("body").removeClass("sidenav-toggled");
	  });
	  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
	  jQuery(document).on('mousewheel DOMMouseScroll', 'body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse', function(event) {
	    var e0 = eventoriginalEvent,
	      delta = e0.wheelDelta || -e0.detail;
	    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
	    event.preventDefault();
	  });
	  // Scroll to top button appear
	  jQuery(document).scroll(function() {
	    var scrollDistance = jQuery(this).scrollTop();
	    if (scrollDistance > 100) {
	      jQuery('.scroll-to-top').fadeIn();
	    } else {
	      jQuery('.scroll-to-top').fadeOut();
	    }
	  });
	  // Smooth scrolling using jQuery easing
	  jQuery(document).on('click', 'a.scroll-to-top', function(event) {
	    var $anchor = jQuery(this);
	    jQuery('html, body').stop().animate({
	      scrollTop: (jQuery($anchor.attr('href')).offset().top)
	    }, 1000, 'easeInOutExpo');
	    event.preventDefault();
	  });
  });
  
