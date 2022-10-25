//SayfaHazirOldugunda
$(document).ready(function(e){



	$( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
		var $el = $( this );
		var $parent = $( this ).offsetParent( ".dropdown-menu" );
		if ( !$( this ).next().hasClass( 'show' ) ) {
			$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
		}
		var $subMenu = $( this ).next( ".dropdown-menu" );
		$subMenu.toggleClass( 'show' );
		$( this ).parent( "li" ).toggleClass( 'show' );
		$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
			$( '.dropdown-menu .show' ).removeClass( "show" );
		} );
		if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
			$el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
		}
		//return false;
	} );

	$("header .fa-search").click(function(){
		$(".search_in_dv").show();
		$(".search_in_dv").addClass("active");
	});

	$(".search_in_dv i").click(function(){
		$(".search_in_dv").hide();
		$(".search_in_dv").removeClass("active");
	});

	$('.slider').slick({
		autoplay: true,
		infinite: true,
		fade: false,
		arrows: true,
		dots: false,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					dots: true,
				}
			}
		]
	}).slickAnimation();

	$('.home_four_slc').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll:3,
					infinite: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false,
				}
			}
		]
	});


	$('.home_pro_slc').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
				}
			}
		]
	});

	$('[data-fancybox]').fancybox({
		infobar: false,
		toolbar: true,
		animationEffect: "zoom-in-out",
		transitionEffect: "slide",
		transitionDuration: 250,
		buttons: ['fullScreen','thumbs','share','close'	],
	});


	$('.news_slc').slick({
		autoplay: true,
		infinite: true,
		fade: false,
		arrows: false,
		dots: true,
		autoplaySpeed: 5000,
		slidesToShow: 2,
		slidesToScroll: 2
	});



	$('.slider-byk').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.slider-kck'
	});
	$('.slider-kck').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-byk',
		dots: false,
		arrows: true,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 481,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: false,
			  }
			}
		]
	}); 

	$('.dotdot').dotdotdot();
 
 
});