$(function () {
    //    navbar
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
    });
    $(".navbar-toggler").on('click', function () {
         $(".navbar-collapse").toggleClass("nav_active");
     });
    //    counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    //    smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });
    //    sticky menu
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $('.sticky-top').removeClass('sticky');
        } else {
            $('.sticky-top').addClass('sticky');
        }
    });
    //    preloader
    $(window).on('load', function (event) {
        $('.preloader').delay(1000).fadeOut(500);
    });
    //    BACK TO TOP BUTTON
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 1000) {
            $('.back_to_top').fadeIn(200)
        } else {
            $('.back_to_top').fadeOut(200)
        }
    });
    $('.back_to_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });
    //    venobox
    $('.venobox').venobox({
        framewidth: '400px',
        frameheight: '300px',
        spinner: 'cube-grid',
        spinColor: '#28B8D8'
    });




});
