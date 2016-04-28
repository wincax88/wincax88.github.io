/**
 * Created by michael on 4/26/16.
 */
var dataBJ = [
    [1,40,100,0,0,0,0,"图形与几何"],
    [6,5,150,90,1.77,68,33,"数与运算"],
    [11,28,50,38,0.57,31,15,"方程与代数"],
    [16,19,100,29,0.34,13,5,"函数与分析"],
    [21,8,50,36,0.61,29,13,"数据整理和概率统计"],
];

var dataGZ = [
    [1,10,50,27,1.163,27,13,"默写"],
    [6,2.7,100,69,1.067,92,16,"诗词理解"],
    [11,13.3,150,60,0.964,25,11,"文言文阅读"],
    [16,26.7,100,97,0.905,51,34,"现代文阅读"],
    [21,6.7,150,76,0.717,31,20,"综合运用"],
    [26,40,100,137,1.481,48,15,"作文"],
];

var dataSH = [
    [1,17,150,125,0.82,34,23,"光学与热学"],
    [6,48,100,121,1.28,68,51,"力学"],
    [11,35,50,124,1.03,45,24,"电磁学"],
    [21,18,100,167,1.16,57,43,"实验"],
];

var dataSZ = [
    [6,65,100,121,1.28,68,51,"基本概念与基本理论"],
    [21,25,50,167,1.16,57,43,"化学实验"],
    [26,10,150,121,1.28,68,51,"基本概念与基本理论"],
];

var dataWH = [
    [6,30,100,121,1.28,68,51,"听力"],
    [21,50,150,167,1.16,57,43,"语言知识"],
    [26,70,50,121,1.28,68,51,"读写"],
];


var schema = [
    {name: 'date', index: 0, text: '日'},
    {name: 'AQIindex', index: 1, text: '中考分数占比'},
    {name: 'PM25', index: 2, text: '题目难易程度'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    backgroundColor: '#333',
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],

    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' '
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>';
        }
    },
    xAxis: {
        show: false,
        type: 'value',
        name: '日期',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 26,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        show: false,
        type: 'value',
        name: '中考分数占比',
        nameLocation: 'end',
        nameGap: 20,
        max: 70,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    visualMap: [
        {
            show: false,
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 300,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：PM2.5'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            }
        },
        {
            show: false,
            left: 'right',
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：二氧化硫'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                colorLightness: [1, 0.5]
            }
        }
    ],
    series: [
        {
            name: '数学',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
        },
        {
            name: '语文',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZ
        },
        {
            name: '物理',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataSH
        },
        {
            name: '化学',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataSZ
        },
        {
            name: '英语',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataWH
        }
    ]
};

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main_map'));
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
