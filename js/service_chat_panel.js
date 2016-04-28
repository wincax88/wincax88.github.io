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

            welcomeMsg: '<p class="big"><span class="blue">理优教育是</span>国内首家pad在线学习APP</p><p>致力于中小学生在线1对1个性化课外辅导。汇集全国各地一线顶级名师!</p><p>立足上海，覆盖全国!</p><p class="big red">在线学习APP，就选理优1对1！</p><p class="big blue">预约咨询电话: 400-158-0101</p></br><p class="big"><span class="red">[</span>升学攻略<span class="red">]</span></p><p class="red">小初高升学专业指导</br>全国中高考试卷分析</br>上海各区一模二模及期中期末复习资料免费下载<p><p class="big blue">详情咨询在线老师</p><br><p class="big">家长您好！</p><p>我是理优教育的汉汉老师，很高兴为您服务!<br>请问您想要咨询：</p><p class="red">1、小班课</br>2、1对1课程</br>3、升学相关信息</br>4、参加测评等</p>'
        });
    });
}