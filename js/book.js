$(function(){
    var show_book = $("#show_book").text();
    if (show_book == 1) {
		$('.shadow').show();
		$('.alert01').show();
    }

    $('.has_pad i').hover(function(){
        $(this).siblings('b').show();
        return;
    }, function(){
        $(this).siblings('b').hide();
        return;
    });
    //$( "input[type=checkbox]" ).on( "click", countChecked );
    if ($('.has_pad input[type=checkbox]').is(':checked')) {
        
        $('#submit_book_info').css('cursor', 'pointer');
        $('#submit_book_info').css('background-color', '#0bceff');
        $('#submit_book_info').removeClass('submit_disabled');
    } else {
        $('#submit_book_info').css('background-color', '#ccc');
        $('#submit_book_info').css('cursor', 'default');
        $('#submit_book_info').addClass('submit_disabled');
    };

    $('.has_pad input[type=checkbox]').on('click', function(){
        if ($(this).is(':checked')) {
            $('#submit_book_info').css('cursor', 'pointer');
            $('#submit_book_info').css('background-color', '#0bceff');
            $('#submit_book_info').removeClass('submit_disabled');
        } else {
            $('#submit_book_info').css('background-color', '#ccc');
            $('#submit_book_info').css('cursor', 'default');
            $('#submit_book_info').addClass('submit_disabled');
        }
    });
    

    $("#submit_book_info").on("click", function(){

        if ($(this).hasClass('submit_disabled')) {
            return;
        }
        
        var phone = $("#book_phone").val();
        var nick = $("#book_nick").val();
        var grade = $("#book_grade").val();

        var origin = QueryString.f;

        if (!check_phone(phone)) {
            show_book_err("手机号码格式错误");
            return;
        }


        if (!nick) {
            show_book_err("学生姓名不能为空");
            return;
        }

        if (!grade) {
            show_book_err("请选择学生年级");
            return;
        }

        $.ajax({
            url: '/book/free_lesson',
            data: {'phone':phone, 'nick':nick, 'origin': origin, 'grade': grade},
            dataType: 'json',
            success: function(data){
                var result_str = '';
                if (data['ret'] == 0) {
                    result_str = "恭喜！<br/>你已获得一次0元试听的机会";
                } else {
                    result_str = data['info'];
                }

                $("#book_result").html(result_str);
                $('.close').click();
                $('.alert02').show();
                $('.shadow').show();
            }
        });
    });

    $('.grade_selected').on("click", function(){
        var grade_id = $(this).data('value');
        var grade_text = $(this).text();
        $(this).parent().siblings('.choose_grade').children('.select_span').children('span').text(grade_text);
        $(this).parent().siblings('.choose_grade').children('.select_span').children('span').css('color', '#666');
        $(this).parent().siblings('.choose_grade').children('.select_span').css('border-bottom', '1px solid #666');
        $('#book_grade').val(grade_id);
        $(this).parent().hide();
    });

    $('.select_span').on('click', function(){
        $(this).parent().siblings('.grade_ul').show();
    });


    $('#confirm_result').on('click', function(){
        $('.close').click();
    });

	//0元试听
	$('.try').click(function(){
		$('.shadow').show();
		$('.alert01').show();
	});
	$('.close').click(function(){
		$('.shadow').hide();
		$(this).parent().parent().hide();
	});
	
	//二维码
	$('.weichat').hover(function(){
		$('.code img').show();
	},function(){
		$('.code img').hide();
	});

	//input
	$('.click_no').click(function(){
		$(this).hide().next('.click_on').show().val('').focus();
	});
	
	$('.click_no').focus(function(){
		$(this).hide().next('.click_on').show().val('').focus();
		
	});
	
	$('.click_on').blur(function(){
		if($(this).val()==''){
			$(this).hide().siblings('.click_no').show();
		};
	});
	
    $(".slide_bg01").on("click", function(){
        window.open("/activity/mothers_day");
    });
});

function check_phone(phone)
{
    var reg = /^0?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/g;
    return reg.test(phone);
}

function show_book_err(msg)
{
    $('.wrong').text(msg);
    $('.wrong').show();
    $('.wrong_p').css("padding-top", "0");
}

function show_err(msg)
{
    $('#show_err').text(msg);
    $('#show_err').show();
    var se = setTimeout(function(){
        $('#show_err').hide();
        clearTimeout(se);
    }, 2000);

}

var QueryString = function() {
	// Usage: QueryString.tid
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if ( typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
            // If second entry with this namepay_success
        } else if ( typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }
    return query_string;
}();
	
