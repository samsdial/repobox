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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        //autoplay: true,
        //autoplaySpeed: 2000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider_intro',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
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
    $(document).on("scroll", function(){
        if
        ($(document).scrollTop() > 600){
            $("#header").addClass("navbar_onscroll");
        }
        else
        {
            $("#header").removeClass("navbar_onscroll");
        }
    });
    $(document).on("scroll", function(){
        if
        ($(document).scrollTop() > 600){
            $("#logo").addClass("logo_cobox--color");
        }
        else
        {
            $("#logo").removeClass("logo_cobox--color");
        }
    });
});

