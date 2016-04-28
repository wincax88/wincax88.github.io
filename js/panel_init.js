// 请在此插件前引用_trial_courses_panel.css
// 需要jquery

$(document).ready(function(){

    // constructor
    function CreatePanel(custom){
        this.call_btn = custom.call_btn || null;
        this.snippet_url = custom.snippet_url;
        this.wrapper_id = custom.wrapper_id;
        this.is_show = false;

    }

    CreatePanel.prototype.init = function(){
        var _ = this;

        var createPanel = (function(){
            console.log('craete panel');
            var panel_wrapper = document.createElement('div');
            var panel = document.createElement('div');
            var black_bg = document.createElement('div');
            $(black_bg).addClass('black-bg');
            var hasPanel = false;

            return function(){
                if(!hasPanel){
                    $(panel).load(_.snippet_url, function(){
                        console.log('load success');
                    });
                    $(panel_wrapper)
                        .css('display', 'none')
                        .attr('id', _.wrapper_id)
                        .attr('class', 'float-panel-wrapper')
                        .append(black_bg)
                        .append(panel);
                        
                    hasPanel = true;
                }
                return $(panel_wrapper)
            }
        })();


        var panel_wrapper = createPanel();
        $('body')
            .addClass('forbidden-scroll')
            .append(panel_wrapper);


        var call_btn = _.call_btn;

        if(_.call_btn){
            call_btn.bind('click', function(){
                show();
            })
        }else {
            show();
        }

        function show(){
            $('#'+_.wrapper_id).css('display', 'block');
            _.is_show = true;
            
            // panel_wrapper.css('margin-top', -panel_wrapper.height()/2);
            

            // close control 
            $('.black-bg').bind('click', function(){
                $('#'+_.wrapper_id).css('display', 'none');
                _.is_show = false;
            })
        }
    }

    // new
    window.trial_courses_panel = new CreatePanel({
        call_btn: $('.trial-courses-btn'),
        snippet_url: '../baichuanim/trial_courses_panel.html',
        wrapper_id: 'trial-courses-panel-wrapper'
    });

    window.welcome_panel = new CreatePanel({
        snippet_url: '../baichuanim/welcome_panel.html',
        wrapper_id: 'welcome-panel-wrapper'
    });

    trial_courses_panel.init();


    setTimeout(function(){
        if(!trial_courses_panel.is_show){
            welcome_panel.init();
            return;
        }
    }, 60000) // 60000

});






































