
;(function(){
    // close control 
    $('.welcome-panel > .close-btn').bind('click', function(){
        window.welcome_panel.is_show = false;
        $('#welcome-panel-wrapper').css('display', 'none');
    })

})();