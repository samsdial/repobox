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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //.slider_quote_people
    $('.slider_quote_people').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
    // Calculadora
    $('#calculate').click(function(e) {
        var weight = $('#weight').val();
        var declared = $('#declared').val();
        var total = 0;
        var percentage = 0;
        if(weight != undefined && weight != null && weight != "" &&
            declared != undefined && declared != null && declared != "") {
            if(weight > 0 && declared > 0) {
                if(weight > 110) {
                    alert('el peso máximo permitido por guía no puede superar las 110 libras.')
                }else{
                    weight < 7 ? weight = 7 : weight = weight;
                    declared < 30 ? declared = 30 : declared = declared;
                    declared <=200 ? percentage = 0.14 : percentage = 0.30;
                    total = ( (weight*1.70) + (declared*percentage) + 5 );
                    total = (Math.round(total*100)/100).toFixed(1);
                    $('#total').text('$'+total+' USD');
                }
            }else{
                alert('Los valores deben ser superiores a 0');
            }
        }else{
            alert('Diligenciar los campos');
        }
    });
});
AOS.init();