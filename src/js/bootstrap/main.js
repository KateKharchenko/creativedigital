;(function($){
'use strict';
	$(window).on('load', function(){
		var map;
		var mapContainer = $('#map')[0];
		var mapCenter = {lat: -34.397, lng: 150.644}

		map = new google.maps.Map(mapContainer, {
		          center: mapCenter,
		          zoom: 10,
		          disableDefaultUI: true,
		        });

		var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
		var beachMarker = new google.maps.Marker({
          position: mapCenter,
          map: map,
          icon: image
        });

        google.maps.event.addDomListener(window, "resize", function(){
        	var center = map.getCenter();
        	google.maps.event.trigger(map, "resize");
        	map.setCenter(center);
        })
	});

			 // function include(url) {
    //     var script = document.createElement('script');
    //     script.src = url;
    //     document.getElementsByTagName('head')[0].appendChild(script);
    // }
    // 	include("js/main.js");

    	    		$(function(){
	$('.work__pictures').slick({
		arrows: true,
  	infinite: true,
  	dots: true,
  	slide: 'img',
  	prevArrow: ".work__arrow-prev",
	nextArrow: ".work__arrow-next"
	});
})
		$(function(){
			$('.team__meet').slick({
				arrows: true,
		  infinite: true,
		  dots: false,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  slide: 'div',
		  prevArrow: ".team__arrow-prev",
		  nextArrow: ".team__arrow-next",
		  responsive: [
		  {
		  	breakpoint: 1200,
		  	settings: {
		  		slidesToShow: 2,
		  		slidesToScroll: 2,
		  		infinite: true,
		  		dots: false
		  	}

		  }, 	{	breakpoint: 992,
		  	settings:{
		  		slidesToScroll: 1,
		  		slidesToShow: 2,
		  		dots: true,
		  		arrows: false,
		  	},

		  	},

		  	{	breakpoint: 768,
		  	settings:{
		  		slidesToScroll: 1,
		  		slidesToShow: 1,
		  		dots: true,
		  		arrows: false,
		  	}}

		  	],

		  // responsive: [
		  // {
		  // 	breakpoint: 992,
		  // 	settings:{
		  // 		slidesToScroll: 1,
		  // 		slidesToShow: 2,
		  // 		dots: true,
		  // 		arrows: false,
		  // 	}
		  // }],

		});
});
						$(function(){
					$(document).ready(function(){
			$("#menu").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
			});
			});
				});

						$(function(){
					$(document).ready(function(){
			$("#arrow-top").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
			});
			});
				});
})(jQuery);

