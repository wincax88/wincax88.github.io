
;(function(){
    var fake_selects = $('.input-wrapper .fake-select'),
        fake_select_options = fake_selects.find('.option');

    var inputs = $('.input-wrapper input');

    inputs.bind('blur', function(){
        var result = getValidate($(this).parent());
        //console.log(result);
        handleChangeState($(this).parent(), result);
    });

    fake_selects.bind('click', function(){

        if($(this).hasClass('release')){
            $(this).removeClass('release');
            $(this).find('.option').slideUp(200, function(){
                $(this).parent().parent().parent().css('z-index', '900');
            });

            var result = getValidate($(this).parent());
            //console.log(result);
            handleChangeState($(this).parent(), result);
        }else {
            $(this).addClass('release');
            $(this).parent().parent().css('z-index', '910');
            $(this).find('.option').slideDown(200);
        }
    });

    fake_select_options.find('div').bind('click', function(){
        var value = $(this).attr('value');
        $(this).parent().parent().attr('value', value);
        var option_text = $(this)[0].innerHTML;
        $(this).parent().parent().addClass('selected');
        $(this).parent().siblings('.default')[0].innerHTML = option_text;
    });
    fake_select_options.bind('mouseleave', function(){
        $(this).parent().removeClass('release');
        $(this).slideUp(200, function(){
            $(this).parent().parent().css('z-index', '900');
        });
        //var result = getValidate($(this).parent().parent());

        //handleChangeState($(this).parent().parent(), result);
    })


    var submit = $('.submit-btn button');
    submit.bind('click', function(){

        var subject = $('.input-wrapper[name="subject"] .fake-select').attr('value');
        var grade = $('.input-wrapper[name="grade"] .fake-select').attr('value');
        var tel = $('.input-wrapper[name="tel"] input').val();
        var has_pad = $('.input-wrapper[name="has-pad"] .fake-select').attr('value');

        //console.log(name, grade, tel, has_pad);

        //console.log('phone number : ' + tel);

        if(subject=='' || grade=='' || tel=='' || has_pad==''){
            var alert = $('.alert-wrapper');

            alert.removeClass('hidden');
            alert.find('.confirm-btn').bind('click',function(){
                alert.addClass('hidden');
            })
            return ;
        }

        console.log(subject);
        var warn = $('p.warn');
        warn.each(function(i){
            var a = $(warn[i]).data('warn');
            if(a=='show'){
                var alert = $('.alert-wrapper');
                alert.find('.alert-info').text('请按照提示正确填写');

                alert.removeClass('hidden');
                alert.find('.confirm-btn').bind('click',function(){
                    alert.addClass('hidden');
                })
                return ;
            }
        });

        $.ajax({
            //url: '/book/free_lesson',
            url: 'http://admin.yb1v1.com/common_ex/book_free_lesson',
            data: {
                'subject': subject,
                'grade': grade,
                'phone': tel,
                'has_pad': has_pad
            },
            dataType: 'JSONP',
            success: function(result){
                if (result['ret'] != 0) {
                    var alert = $('.alert-wrapper');
                    alert.find('.alert-info').text(result['info']);

                    alert.removeClass('hidden');
                    alert.find('.confirm-btn').bind('click',function(){
                        alert.addClass('hidden');
                    });
                    return ;
                } else {
                    var html = '';
                    html += '<div class="img-ct" ><img src="./img/codetwo.png" alt=""></div>';
                    html += '<p class="weixin">理优教育在线学习APP</p>';
                    html += '<p class="success">&nbsp&nbsp&nbsp&nbsp查看课程安排进度，了解更多课程信息请关注我们的微信公众号，1对1专属定制课程请拨打免费热线400-158-0101。</p>';

                    $('.trial-courses-panel .title-ct .title').text('祝贺您预约成功！');
                    $('.trial-courses-panel .panel-content').empty().append(html);
                }
            },
            error: function(){
            }
        });
    });


    // close control
    $('.trial-courses-panel > .close-btn').bind('click', function(){
        //console.log('aaaaaaaaaacloseeee');
        window.trial_courses_panel.is_show = false;
        $('#trial-courses-panel-wrapper').css('display', 'none');
    })



    function getValidate(ele){
        // ele must be .input-wrapper
        // type from attribute name within .input-wrapper
        ele = $(ele);
        var type = ele.attr('name'),
            result;
        //console.log(type);

        if((type == 'grade')||(type == 'has-pad')||(type == 'subject')) {
            result = ele.find('.fake-select').attr('value');

            //console.log(result);

            if(result == ''){
                return false;
            }
            return true;
        }

        if(type == 'tel'){
            result = ele.find('input').val();
            // console.log(result);
            if(result.length!==11){
                return false
            }
            return true
        }
    }

    function handleChangeState(ele, bool){
        // ele must be .input-wrapper
        ele = $(ele);
        if(bool==true){
            //console.log('truuuuuuuuuuuue');
            ele.removeClass('warn').addClass('correct');
            ele.find('.iconfont.state').removeClass('icon-warn').addClass('icon-correct');
            ele.parent().find('>p.warn').slideUp(200).data('warn','hidden');
            //var a = ele.parent().find('>p.warn').data('warn');
            //console.log(a);
        }else
        if(bool==false){
            //console.log('faaaaaaaaaalse');
            ele.removeClass('correct').addClass('warn');
            ele.find('.iconfont.state').removeClass('icon-correct').addClass('icon-warn');
            ele.parent().find('>p.warn').slideDown(200).data('warn', 'show');
            var a = ele.parent().find('>p.warn').data('warn');
            //console.log(a);
        }else {
            //console.log('defauuuuuuuuuuult');
            ele.removeClass('correct warn');
            ele.find('.iconfont.state').removeClass('icon-correct icon-warn');
        }
        return ele;
    }


})();
