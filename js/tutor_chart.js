/**
 * Created by michael on 4/27/16.
 */
// 基于准备好的dom，初始化echarts实例
var main_tutor = echarts.init(document.getElementById('main_tutor'));

// 指定图表的配置项和数据
option = {
    baseOption: {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}"
        },

        calculable: true,
        series: [
            {
                name:'理优名师',
                type:'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'ascending',
                gap: 2,
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: 11,
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: [
                    {value: 100, name: '第一轮教育资质面试（优先10年以上教学经验，学科带头人）',itemStyle: {normal: {color: '#b69ae5'}}},
                    {value: 80,  name: '第二轮教育经验名师（熟悉当地教材，准确把握中考命题方向）',itemStyle: {normal: {color: '#48d1e1'}}},
                    {value: 60, name: '第三轮学科专家面试（理优学科专家筛选，具备在线教育的感觉）',itemStyle: {normal: {color: '#82d15b'}}},
                    {value: 40,  name: '第四轮用户评价筛选（学生评价好评率需达到80%以上）',itemStyle: {normal: {color: '#f1c746'}}},
                    {value: 20, name: '理优名师，全国金字塔顶尖的老师 ',itemStyle: {normal: {color: '#f47f38'}}},
                ]
            }
        ]
    },
    media: [
        {
            option: {

                series: [
                    {
                        center: ['50%', '50%']
                    }
                ]
            }
        },
        {
            query: {
                minAspectRatio: 1
            },
            option: {

                series: [
                    {
                        center: ['50%', '50%']
                    }
                ]
            }
        },
        {
            query: {
                maxAspectRatio: 1
            },
            option: {

                series: [
                    {
                        center: ['50%', '50%']
                    }
                ]
            }
        },
        {
            query: {
                maxWidth: 500
            },
            option: {

                series: [
                    {
                        center: ['50%', '50%']
                    }
                ]
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
main_tutor.setOption(option);
