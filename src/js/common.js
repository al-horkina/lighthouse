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


        const $map = $('.location');
        const map = new google.maps.Map(
            $map[0],
            {
                center: {lat: 28.619, lng: -80.790},
                zoom: 14,
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#c4a77f"
                            }
                        ]
                    }
                ]
            }
        );

        const image = {
            url: '/assets/img/Placeholder.svg',
            scaledSize: new google.maps.Size(48, 64)
        };

        const marker = new google.maps.Marker({
            position: {lat: 28.613, lng: -80.811},
            map: map,
            title: 'Titusville',
            icon: image
        });


    })
})(jQuery);