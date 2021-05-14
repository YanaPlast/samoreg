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
    