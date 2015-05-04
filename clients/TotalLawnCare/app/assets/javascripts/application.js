// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

var mq = window.matchMedia( "(min-width: 768px)" );

/*Sticky navigation once you scroll past the original navigation*/
$(function(){
	var menu = $('.navbar'),
	pos = menu.offset();
		
	$(window).scroll(function(){
		/*Check first to see if the mobile sticky menu already exists*/
		if (mq.matches) {
			if($(this).scrollTop() > pos.top) {
				$(menu).addClass('navbar-sticky');
			} else if($(this).scrollTop() <= pos.top ){
				$(menu).removeClass('navbar-sticky');
			}
		}
	});
});

/*Navigation*/
/*Since its a one-page site, we're closing the mobile menu once an item is clicked*/
$('.navbar-collapse a:not([href=#])').click(function () {
	if (!mq.matches) {
		$('.navbar-collapse').collapse('hide');
	}
});




/*Care Tips*/
var tipsWindow = $('.caretips-explained');

/*Show the correct tip based off of the "data-target" of the link that has been clicked*/
$('.btn-tips').click(function() {
	var showtip = $(this).attr("data-target");	
	$('.caretips-tip').not($(showtip).slideToggle("slow")).slideUp("slow");	
});

/*Close the tips menu when the "minimize" button is clicked*/
$('.tips-btn-min').click(function() {
	$('.caretips-tip').slideUp("slow");
});


/*Animate to the selected section*/
$(function() {
  $('a[href*=#]:not([href=#myCarousel])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
		if (!mq.matches) {	/*Mobile Menu*/
			$('html,body').animate({
			  scrollTop: target.offset().top + (-64)
			}, 500);
			return false;
		} else {
			$('html,body').animate({
			  scrollTop: target.offset().top + (-55)
			}, 500);
			return false;
		}
      }
    }
  });
});

/*Highlight tab of the section that is being show*/
$('body').scrollspy({ target: '.navbar', offset: 64 })
