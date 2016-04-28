/**
 * Created by michael on 16/4/27.
 */
window.onload = function(){
    $.getJSON('/book/get_anonymous_user', {}, function(result){
        WKIT.init({
            uid: result['userid'],
            appkey: result['appkey'],
            credential: result['password'],
            touid: result['touid'],
            sendMsgToCustomService: true,
            groupId: result['groupid'],

            // autoMsg: 'Hi~',

            welcomeMsg: '<p class="big"><span class="blue">理优1对1</span>专业精品辅导，致力于中小学生在线1对1订制化课外辅导。</p><p>汇集一线专业名师，脉络化学习，系统化学习，定制化课程，专攻薄弱点。</p><p>记录分析学习轨迹，针对性优化内容。</p><p class="big red">读书是件精细活，选择理优，学习无忧！</p><p class="big"><span class="red">[</span>初高中专业指导 免费试听精品老师课程 详情咨询在线老师 <span class="red">]</span></p><p>家长您好！ 我是理优1对1的王老师，很高兴为您服务! <br>请问您想要咨询：</p><p class="red">1、暑期免费十节衔接课</br>2、试听1对1冲刺课程</br>3、9.9三节精品1对1冲刺课程</br>4、参加测评</p>'
        });
    });
}