/**
 * Created by michael on 16/4/25.
 */

$(function(){
    //滚动
    $('.down2').click(function(){
        $("html,body").animate({scrollTop:700},800);
    })
    //下载
    $('.student').click(function(){
        var all_H=$('html').height();
        $('.shadow').show().css('height',all_H);
        $('.stu_download').show();
    });
    $('.stu_download .close_button').click(function(){
        $('.shadow').hide();
        $('.stu_download').hide();
    });

    $('.parent').click(function(){
        var all_H=$('html').height();
        $('.shadow').show().css('height',all_H);
        $('.par_download').show();
    });
    $('.par_download .close_button').click(function(){
        $('.shadow').hide();
        $('.par_download').hide();
    });

    $('.teacher').click(function(){
        var all_H=$('html').height();
        $('.shadow').show().css('height',all_H);
        $('.teach_download').show();
    });
    $('.teach_download .close_button').click(function(){
        $('.shadow').hide();
        $('.teach_download').hide();
    });
    //downloadBanner
    $('.pad_box .pad').animate({left:0,opacity:1},500);
    setTimeout(function(){
        $('.pad_box .padStudent').animate({left:60,opacity:1},500);
    },300);
    setTimeout(function(){
        $('.pad_box .phone').animate({left:395,opacity:1},500);
    },500);

});
