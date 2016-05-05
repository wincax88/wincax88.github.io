/**
 * Created by michael on 5/5/16.
 */

// 表单验证
$(function () {
    var $toastlast;
    // type : success, info, warning, error
    $.showtoast = function(type, title, message) {

        toastr.options.closeButton = true;
        toastr.options.newestOnTop = false;
        toastr.options.progressBar = true;
        toastr.options.positionClass = "toast-top-center";
        toastr.options.preventDuplicates = false;
        toastr.options.showDuration = 300;
        toastr.options.hideDuration = 1000;
        toastr.options.timeOut = 5000;
        toastr.options.extendedTimeOut = 1000;
        toastr.options.showEasing = 'swing';
        toastr.options.hideEasing = 'linear';
        toastr.options.showMethod = "fadeIn";
        toastr.options.hideMethod = "fadeOut";


        var shortCutFunction = type;

        // type : Success, Info, Warning, Error
        var $toast;
        if (shortCutFunction == 'success') {
            $toast = toastr.success(message, title);
        }
        else if (shortCutFunction == 'info') {
            $toast = toastr.info(message, title);
        }
        else if (shortCutFunction == 'warning') {
            $toast = toastr.warning(message, title);
        }
        else if (shortCutFunction == 'error') {
            $toast = toastr.error(message, title);
        }
        $toastlast = $toast;

        if(typeof $toast === 'undefined'){
            return;
        }
        if ($toast.find('#okBtn').length) {
            $toast.delegate('#okBtn', 'click', function () {
                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                $toast.remove();
            });
        }
        if ($toast.find('#surpriseBtn').length) {
            $toast.delegate('#surpriseBtn', 'click', function () {
                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
            });
        }
        if ($toast.find('.clear').length) {
            $toast.delegate('.clear', 'click', function () {
                toastr.clear($toast, { force: true });
            });
        }

    };
    $('#submit-free-cource').click(function () {

        var tel = $('input[name="tel"]').val();
        var grade = $('select[name="grade"]').val();
        var subject = $('select[name="subject"]').val();
        var has_pad = $('select[name="has-pad"]').val();

        console.log('tel ' + tel);
        console.log('grade ' + grade);
        console.log('subject ' + subject);
        console.log('has_pad ' + has_pad);
        // check
        if (tel.length <= 0) {
            $.showtoast('warning', "提示", '请输入家长的手机号');
        }
        else if (tel.length != 11) {
            $.showtoast('warning', "提示", '请输入11位的手机号码');
        }
        else if (grade == -1) {
            $.showtoast('warning', "提示", '请选择学生的年级');
        }
        else if (subject == -1) {
            $.showtoast('warning', "提示", '请选择试听的学科');
        }
        else if (has_pad == -1) {
            $.showtoast('warning', "提示", '请选择平板类型');
        }
        if (tel.length != 11 || grade == -1 || subject == -1 || has_pad == -1) {
            return;
        }

        // submit
        $.ajax({
            url: 'http://admin.yb1v1.com/common_ex/book_free_lesson',
            type: 'POST',
            dataType: 'JSONP',
            data: {
                'subject': subject,
                'grade': grade,
                'phone': tel,
                'has_pad': has_pad,
                'origin':'www_mobile'
            },
            success: function(result){
                console.log(result);
                if (result['ret'] == 0) {
                    $.showtoast('success', "信息", '恭喜您预约成功');
                } else {
                    $.showtoast('error', "错误", result['info']);
                }
            },
            error: function(){
                $.showtoast('error', "错误", '网络不太通畅，请稍后再试，或拨打咨询电话直接完成预约');
            }
        })

    })
});
