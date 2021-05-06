$(function () {

    "use strict";

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



    //====== filter & masonry isotope
/*     var grid = $('.grid').isotope({
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
    }); */


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
    })

  //======  coursor in input on focus  ===============
 
    var blockWithInput = $('.input-message');
    blockWithInput.on('click', function(){
        $(this).children('input[type="text"]').focus();
    });


});
