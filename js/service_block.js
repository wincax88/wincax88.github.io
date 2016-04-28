/**
 * Created by michael on 4/23/16.
 */

$('.go_for_service').on('click', function(){
    window.open('/baichuanim/service_chat_panel.html');
});

document.getElementById("service_wechat").onmouseover = function(){
    $(this).find('.float-wrapper').css('display','block').addClass('active');
}

document.getElementById("service_wechat").onmouseout = function(){
    $(this).find('.float-wrapper').css('display','none').removeClass('active');
}
document.getElementById("service_custom").onmouseover = function(){
    $(this).find('.float-wrapper').css('display','block').addClass('active');
}

document.getElementById("service_custom").onmouseout = function(){
    $(this).find('.float-wrapper').css('display','none').removeClass('active');
}

document.getElementById("service_tel").onmouseover = function(){
    $(this).find('.float-wrapper').css('display','block').addClass('active');
}

document.getElementById("service_tel").onmouseout = function(){
    $(this).find('.float-wrapper').css('display','none').removeClass('active');
}

