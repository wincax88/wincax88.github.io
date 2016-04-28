/**
 * Created by michael on 4/21/16.
 */
/*
setTimeout(videoChangeBanner, 1000);

function videoChangeBanner(){
    $('.banner-video').hide();
    $('.banner-home').show().css({
        "margin-top": "53px"
    });
    $('#main-menu a').css({
        "color": "#333"
    });

}
function openModalWrap(object) {

    if (object.is(":visible") == true) {
        return false;
    }


    var topH = $(window).height() / 2.0 - object.height() / 2.0;
    var _h = 40;

    var _top1 = topH - _h;
    var _top2 = topH;


    object.animate({
        top: _top1 + 'px',
        opacity: 0
    }, 0, function () {
        $(this).show();
    }).animate({
        top: _top2 + 'px',
        opacity: 1
    }, 600);

}
var getQueryString = function (name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    //alert(r);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;

}

$(function () {
    if (!navigator.userAgent.match(/mobile/i) || navigator.userAgent.match(/iPad/i)) {
        gotoSite();
        //close Modal Wrap lightBox
        $(".lightBox-close,.drainage-close").click(function () {

            if (document.getElementById("chk_users_site_select").checked) {
                $.removeCookie("hiddenTen");
                $.cookie('hiddenTen', true, { expires: 10 });
            }

            $(".lightBox-bg, .lightBox-box").fadeOut(100);


        });

        $(".drainage-div a").on('click', function (e) {
            var site_name = $(this).attr('data-name');
            if (document.getElementById("chk_users_site_select").checked) {
                $.removeCookie("hiddenTen");
                $.cookie('hiddenTen', true, { expires: 10 });
            }
            if (site_name == "select_adult") {
                $(".lightBox-bg, .lightBox-box").fadeOut(100);
                return false;
            }
        });
    }

});
function gotoSite() {
    //cookie页面分流
    var drainagebox = getQueryString("drainagebox");
    if (drainagebox == "false") { return false; }
    $(".lightBox-bg").show();
    openModalWrap($(".lightBox-box.site-drainage"));
    var exec = $.cookie("hiddenTen");
    if (exec === "true") {
        $(".lightBox-bg, .lightBox-box").hide();
    }
}
if (!(/msie [6|7|8]/i.test(navigator.userAgent))) {
    var Media = document.getElementById("Comp");
    var isFirst = true;
    function mediaPlay() {
        if (isFirst) {
            Media.play();
            isFirst = false;
        }
    }
    Media.play();

    function dots() {
        $('.dots').addClass('animated fadeIn').removeClass('hide')
    }
    function backdrop() {
        $('.backdrop').addClass('animated fadeIn-b').removeClass('hide')
    }
    function teachersText() {
        $('.teachers-text').addClass('animated fadeIn').removeClass('hide')
    }
    function teachersIpad() {
        $('.teachers-ipad').addClass('animated fadeIn').removeClass('hide')
    }

    function initSkrollr() {
        // Init Skrollr
        window.skr = skrollr.init({
            render: function (data) {
                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
                if (data.curTop > 0) {

                    $('#main-menu').css("top", "0");
                } else {

                    $('#main-menu').css("top", "0");
                }
                if (data.curTop >= 200) {
                    $('#main-menu').addClass('on');
                } else {
                    $('#main-menu').removeClass('on');
                }
                if (data.curTop >= 300) {
                    $('#main-menu').addClass('on2');
                } else {
                    $('#main-menu').removeClass('on2');
                }
                //Log the current scroll position.
                //console.log(data.curTop);
                if (data.curTop >= 2000) {
                    mediaPlay();
                }
                if (data.curTop >= 200) {
                    setTimeout("dots()", 500)
                    //                setTimeout("teachersImg()", 2000)
                    setTimeout("backdrop()", 750)
                    setTimeout("teachersText()", 1500)
                    setTimeout("teachersIpad()", 750)
                }
                if (data.curTop >= 600) {
                    teachersIpad()
                }
            },
            forceHeight: false
        });
    }

    initSkrollr();
}

if (navigator.userAgent.match(/iPad/i)) {
    // 视频-1分钟了解DCGS
    var aboutMedia = document.getElementById("aboutVideo");
    $('#myVideo2').on('shown.bs.modal', function () {
        window.skr.destroy();
    })
    $('#myVideo2').on('hidden.bs.modal', function () {
        initSkrollr();
    })
    $('#formModal2').on('hidden.bs.modal', function (e) {
        initSkrollr();
    })
    $('#formModal').on('hidden.bs.modal', function (e) {
        initSkrollr();
    })
    $('#formModal2').on('shown.bs.modal', function (e) {
        window.skr.destroy();

    })
    $('#formModal').on('shown.bs.modal', function (e) {
        window.skr.destroy();
    })
}
*/
//banner轮播
/*
$("#owl-home").owlCarousel({

    autoPlay: 5000,

    navigation: true,
    slideSpeed: 300,
    lazyLoad: true,
    paginationSpeed: 400,
    singleItem: true,
    transitionStyle: "fade",
    addClassActive: true

});*/

$('#fixed-service-box div.iconfont').hover(
    function(){
        $(this).find('.float-wrapper').css('display','block').addClass('active');
    },
    function(){
        $(this).find('.float-wrapper').css('display','none').removeClass('active');
    }
);

document.getElementById("wechat_icon").onmouseover = function(){
    $('.foot_left .foot_cont .wechat_code').css('display','block').addClass('active');
}

document.getElementById("wechat_icon").onmouseout = function(){
    $('.foot_left .foot_cont .wechat_code').css('display','none').removeClass('active');
}

$(function(){
    $('#myCarousel').carousel({
        interval: 5000
    })
    // 初始化轮播
    $("#myCarousel").carousel('cycle');
});

$(document).ready(function() {
    var href = location.href.substring(location.href.lastIndexOf("/") + 1, 255);
    //alert(href);
    var menu = $('#main-menu').find('a[href="' + href + '"]');
    menu.parents('li').addClass('active');
    //$('#main-menu a[href="' + href + '"]').parent().addClass('active');

});
if (!(/msie [6|7|8]/i.test(navigator.userAgent))) {
    var Media = document.getElementById("Comp");
    var isFirst = true;
    function mediaPlay() {
        if (isFirst) {
            Media.play();
            isFirst = false;
        }
    }
    //    Media.play();
    /* function teachersImg(){
     $('.teachers-map img').addClass('animated bounceIn').removeClass('hide')
     }*/
    function dots() {
        $('.dots').addClass('animated fadeIn').removeClass('hide')
    }
    function backdrop() {
        $('.backdrop').addClass('animated fadeIn-b').removeClass('hide')
    }
    function teachersText() {
        $('.teachers-text').addClass('animated fadeIn').removeClass('hide')
    }
    function teachersIpad() {
        $('.teachers-ipad').addClass('animated fadeIn').removeClass('hide')
    }

    function initSkrollr() {
        window.skr = skrollr.init({
            render: function (data) {
                if (data.curTop > 0) {

                    $('#main-menu').css("top", "0");
                } else {

                    $('#main-menu').css("top", "40px");
                }
                if (data.curTop >= 200) {
                    $('#main-menu').addClass('on');
                } else {
                    $('#main-menu').removeClass('on');
                }
                if (data.curTop >= 300) {
                    $('#main-menu').addClass('on2');
                } else {
                    $('#main-menu').removeClass('on2');
                }
                //Log the current scroll position.
                //console.log(data.curTop);
                if (data.curTop >= 2000) {
                    mediaPlay();
                }
                if (data.curTop >= 200) {
                    setTimeout("dots()", 500)
                    //                setTimeout("teachersImg()", 2000)
                    setTimeout("backdrop()", 750)
                    setTimeout("teachersText()", 1500)
                    setTimeout("teachersIpad()", 750)
                }
                if (data.curTop >= 600) {
                    teachersIpad()
                }
            },
            forceHeight: false
        });
    }

    initSkrollr();
}