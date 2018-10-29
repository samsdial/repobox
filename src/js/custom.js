$(document).ready(function($){
    //-- menu open
    /*var btnOpen = $('#trigger-overlay');
    var btnClose = $('.overlay_close');
    var menu = $('.overlay_contentpush');
    btnOpen.on('click', function (e) {
        e.preventDefault();
        menu.addClass('open');
    });
    btnClose.on('click', function (e) {
        e.preventDefault();
        menu.removeClass('open');
    });
    $('#btnCollapseOne').on('click', function () {
        //console.log('Hola uno')
        $('#collapseTwo').removeClass('in');
        //$('#collapseTwo').addClass('collapsing');
        $('#collapseThree').removeClass('in');
        //$('#collapseThree').addClass('collapsing');
    });
    $('#btnCollapseTwo').on('click', function () {
        //console.log('Hola Dos')
        $('#collapseOne').removeClass('in');
        $('#collapseThree').removeClass('in');
    });
    $('#btnCollapseThree').on('click', function () {
        //console.log('Hola Tres')
        $('#collapseTwo').removeClass('in');
        $('#collapseOne').removeClass('in');
    });*/
    $('.slider_intro').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        //autoplay: true,
        //autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
    $('.slider_recommend').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 2000,
    });
    //.slider_quote_people
    $('.slider_quote_people').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay: true,
        //eautoplaySpeed: 2000,
    });
    $('.slider_quote_medios').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        //eautoplaySpeed: 2000,
    });
});

