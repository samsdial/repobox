"use strict";$(document).ready(function(e){e(function(){var o,a,s;return e("ul.navbar-nav li a[href*=#]").click(function(){var o,a;return location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&(o=e(this.hash),(o=o.length&&o||e("[name="+this.hash.slice(1)+"]")).length)?(a=o.offset().top-98,e("html,body").animate({scrollTop:a},1e3),!1):void 0}),s=window.location.href.split("#"),window.location.href[1]&&(o=e("#"+s[1])).length?(a=o.offset().top-0,e("html,body").animate({scrollTop:a},1e3),!1):void 0}),e(".slider_intro").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,autoplay:!0,autoplaySpeed:4e3,asNavFor:".slider-nav"}),e(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider_intro",dots:!0,centerMode:!0,focusOnSelect:!0,arrows:!1}),e(".slider_recommend").slick({slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:4e3}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3}}]}),e(".slider_quote_people").slick({slidesToShow:4,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1300,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".slider_quote_medios").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,eautoplaySpeed:5e3}),e(".slider_about").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,eautoplaySpeed:4e3}),e(document).on("scroll",function(){e(document).scrollTop()>50?e("#header").addClass("navbar_onscroll"):e("#header").removeClass("navbar_onscroll")}),e(document).on("scroll",function(){e(document).scrollTop()>50?e("#logo").addClass("logo_cobox--color"):e("#logo").removeClass("logo_cobox--color")}),e("#calculate").click(function(o){var a=e("#weight").val(),s=e("#declared").val(),l=0;void 0!=a&&null!=a&&""!=a&&void 0!=s&&null!=s&&""!=s?a>0&&s>0?a>110?(e(".weight + .error").addClass("i"),e("#weight").focus(),e(".realvalue + .alerta").removeClass("i"),e(".diligence + .alerta").removeClass("a")):(l=1.7*(a=a<7?7:a)+(s=s<30?30:s)*(s<=200?.14:.3)+5,l=(Math.round(100*l)/100).toFixed(1),e("#total").text("$"+l)):(e(".realvalue + .alerta").addClass("i"),e(".diligence + .alerta").removeClass("a"),e(".weight + .error").removeClass("i")):(e(".diligence + .alerta").addClass("a"),e(".weight + .error").removeClass("i"),e(".realvalue + .alerta").removeClass("i"))}),e("#expanded").change(function(){e("#checkboxdiv").toggle()}),e("#submit").click(function(){var o=e("#name").val(),a=e("#email").val(),s=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,l=e("#phone").val(),r=e("#city").val(),i=e("#message").val();if(""!=o&&""!=a&&""!=l&&""!=r&&""!=i){e(".message + .error").removeClass("i");var t="&name="+o+"&email="+a+"&phone="+l+"&city="+r+"&message="+i;return e.ajax({method:"Post",url:"contact.php",dataType:"json",data:t}).done(function(o){o.success?(e(".alerta p").fadeIn("slow"),e(".alerta p").html("Muchas Gracias por contáctarnos, pronto nos estaremos comunicando contigo."),e("#name").val(""),e("#email").val(""),e("#phone").val(""),e("#city").val(""),e("#message").val("")):(e(".alerta p").fadeIn("slow"),e(".alerta p").html("Error, intente más tarde por favor."))}),!1}return""==o?(e(".name + .error").addClass("i"),e("#name").focus(),!1):(e(".name + .error").removeClass("i"),""!=a&&s.test(a)?(e(".email + .error").removeClass("i"),""==l?(e(".cel + .error").addClass("i"),e("#phone").focus(),!1):(e(".cel + .error").removeClass("i"),""==r?(e(".city + .error").addClass("i"),e("#city").focus(),!1):(e(".city + .error").removeClass("i"),""==i?(e(".message + .error").addClass("i"),e("#message").focus(),!1):void e(".message + .error").removeClass("i")))):(e(".email + .error").addClass("i"),e("#email").focus(),!1))})}),AOS.init();
//# sourceMappingURL=custom.js.map
