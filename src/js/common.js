(function ($) {
    $(document).ready(function () {
        $('.hero-slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true
        });
        $( 'label' ).on( 'click', function( event ) {
            $('.slider-for').slick('setPosition');
            $('.slider-nav').slick('setPosition');
        });



    })
})(jQuery);


