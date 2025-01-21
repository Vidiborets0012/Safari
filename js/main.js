$(function () {
    $('.about-popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
    });
    
    $('.gallery-slider').slick({
        fade: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="slider-arrow slider-arrow-prev" src="images/icon-arrow-prev.svg" alt="arrow-prev" ></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img class="slider-arrow slider-arrow-next" src="images/icon-arrow-next.svg" alt="arrow-next" ></button>'
        // responsive: [
        //     {
        //       breakpoint: 641,
        //       settings: {
        //         arrows: false
        //       }
        //     }
        
        // ]
    });

    $('.gallery-item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}

	});
});