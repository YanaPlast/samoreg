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

    // Переключение шагов по стрелочке

	$('.btn-next').click(nextTab);
	$('.btn-prev').click(prevTab);

    	function nextTab() {
            var scrollTop = $('#pills-tab').offset().top-80;
            console.log(scrollTop);
            // скроллим страницу на значение равное позиции элемента
            $(document).scrollTop(scrollTop);

            $('#pills-tab').offset().top;
            var currentTabId = $('.tab-pane.show').attr('id');
            var currentStep = $('nav-link.active').attr('id');
            // console.log(currentTabId);
             if (currentTabId == 'step-1') {
                 $('#step-1').removeClass('show active');
                 $('#step-2').addClass('show active');
                 $('#step-1-tab').removeClass('active');
                 $('#step-2-tab').addClass('active');
             } else if (currentTabId == 'step-2') {
                 $('#step-2').removeClass('show active');
                 $('#step-3').addClass('show active');
                 $('#step-2-tab').removeClass('active');
                 $('#step-3-tab').addClass('active');
             } else if (currentTabId == 'step-3') {
                 $('#step-3').removeClass('show active');
                 $('#step-4').addClass('show active');
                 $('#step-3-tab').removeClass('active');
                 $('#step-4-tab').addClass('active');
             } else if (currentTabId == 'step-4') {
                 $('#step-4').removeClass('show active');
                 $('#step-5').addClass('show active');
                 $('#step-4-tab').removeClass('active');
                 $('#step-5-tab').addClass('active');
             } else if (currentTabId == 'step-5') {
                 $('#step-5').removeClass('show active');
                 $('#step-1').addClass('show active');
                 $('#step-5-tab').removeClass('active');
                 $('#step-1-tab').addClass('active');
             }
    	}

        function prevTab() {
            var scrollTop = $('#pills-tab').offset().top-80;
            console.log(scrollTop);
            // скроллим страницу на значение равное позиции элемента
            $(document).scrollTop(scrollTop);
            var currentTabId = $('.tab-pane.show').attr('id');
            var currentStep = $('nav-link.active').attr('id');
             if (currentTabId == 'step-1') {
                 $('#step-1').removeClass('show active');
                 $('#step-5').addClass('show active');
                 $('#step-1-tab').removeClass('active');
                 $('#step-5-tab').addClass('active');
             } else if (currentTabId == 'step-2') {
                 $('#step-2').removeClass('show active');
                 $('#step-1').addClass('show active');
                 $('#step-2-tab').removeClass('active');
                 $('#step-1-tab').addClass('active');
             } else if (currentTabId == 'step-3') {
                 $('#step-3').removeClass('show active');
                 $('#step-2').addClass('show active');
                 $('#step-3-tab').removeClass('active');
                 $('#step-2-tab').addClass('active');
             } else if (currentTabId == 'step-4') {
                 $('#step-4').removeClass('show active');
                 $('#step-3').addClass('show active');
                 $('#step-4-tab').removeClass('active');
                 $('#step-3-tab').addClass('active');
             } else if (currentTabId == 'step-5') {
                 $('#step-5').removeClass('show active');
                 $('#step-4').addClass('show active');
                 $('#step-5-tab').removeClass('active');
                 $('#step-4-tab').addClass('active');
             }

	}




} );