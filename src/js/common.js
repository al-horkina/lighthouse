(function ($) {
    $(document).ready(function () {
        $('.hero-slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });

        $('.price__slider').slick({
            arrows: true,
            dots: false
        });

    })
})(jQuery);