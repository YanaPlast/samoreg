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


// Переключение шагов по стрелочке

	$('.btn-next').click(nextTab);
	$('.btn-prev').click(prevTab);

    	function nextTab() {
            var currentTabId = $('.tab-pane.show').attr('id');
            var currentStep = $('nav-link.active').attr('id');
            console.log(currentTabId);
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

// Уже нажатая кнопка Готов

$('.single-use').on('click', function(){
    $(this).addClass('used');
});

// Скролл до футера
var target = $('.chatPage-footer');


$(window).scroll(function(){
var targetPos = target.offset().top + target.offset().top*0.02;
// var targetPos = target.offset().top + target.offset().top*0.02;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
      var stopHeight = target.outerHeight();
    //   console.log(stopHeight);
    //сработает когда пользователь доскроллит до футера на странице с чатом
    $('#owl-container').css({'position':'absolute', 'bottom':'0'});
  } else {
      $('#owl-container').css('position', 'fixed');
  }
}); 

$(window).resize(function(){
    var targetPos = target.offset().top + target.offset().top*0.03;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    var winScrollTop = $(this).scrollTop();
        if(winScrollTop > scrollToElem){
            var stopHeight = target.outerHeight();
            console.log(stopHeight);
            //сработает когда пользователь доскроллит до футера на странице с чатом
            $('#owl-container').css({'position':'absolute', 'bottom':'0'});
        } else {
            $('#owl-container').css('position', 'fixed');
        }
});


});
    