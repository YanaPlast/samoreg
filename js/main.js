$(function () {

    "use strict";



    //===== Meanmenu js
    $('.mobile_menus nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile_menus",
        onePage: false,
    });


    
    
    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });




    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $("#header-area-main, #header-area-chat").removeClass("sticky");
        } else {
            $("#header-area-main, #header-area-chat").addClass("sticky");
        }
    });



    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
            
        });





    //====== testomonial Slide Slick

    $('.testomonial-slide').slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });



    //====== brand Slide Slick

    $('.brand-slide').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });




    //====== Screenshots Slide Slick
    $('.Screenshots-slide').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 700,
        centerMode: true,
        arrows: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
    }
  ]
    });


    //====== mobil Slide Slick
    $('.mobil-item').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        speed: 700,
        arrows: false,
        dots: true,
    });



    //====== mobile Slide Slick
    $('.mobile-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]

    });

    //====== mobile Slide Slick
    $('.mobile-slide-6').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]

    });




    //====== mobile Slide Slick
    $('.mobile-slide-7').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]

    });

    //====== portfolio Slide Slick
    $('.portfolio-previwe').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.portfolio-slide-2'
    });
    $('.portfolio-slide-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        asNavFor: '.portfolio-previwe',
        prevArrow: '<button type="button" class="slick-prev"> PREVIOUS PROJECT</button>',
        nextArrow: '<button type="button" class="slick-next">NEXT PROJECT</button>',

    });





    //====== dnSlide js

    $(".dnSlide-main").dnSlide({
        infinite: true,
        autoPlay: true,
        height: 900,
        autoplaySpeed: 2000,
        speed: 500,
        precentWidth: "68%",
        scale: .8,
    });





    //====== counter js

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });









    //===== Back to top

    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    // Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });







    //====== google map js

    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
            },
                        {
                            "saturation": "-100"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    }
]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }


    //====== filter & masonry isotope
    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({
            filter: filterValue
        });
    });


    //====== niceNumber js
    $('input[type="number"]').niceNumber();



  //====== Outline on focus for input  ===============

    var typing = $('input[type="text"]');

    typing.on('focus', function(event) {
        event.preventDefault();
        $(this).parent().addClass('outline-bright');
        $(this ).attr( "placeholder", "" );
    });
    typing.on('blur', function(event){
        event.preventDefault();
        $(this).parent().removeClass('outline-bright');
        // $(this ).attr( "placeholder", "Введите Ваши данные" );
    })

  //======  coursor in input on focus  ===============
 
    var blockWithInput = $('.input-message');
    blockWithInput.on('click', function(){
        $(this).children('input[type="text"]').focus();
    });




});
