<script>
export default {
    name: '',
    data() {
        return {};
    },
    mounted() {
        this.drawLine('myChart1');
        this.drawLine('myChart2');
        this.drawLine('myChart3');
    },
    methods: {
        drawLine(id) {
            let myChart = this.$echarts.init(document.getElementById(id));
            // 获取容器元素
            if (id === 'myChart1') {
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    title: {
                        text: '总交易数统计',
                        x: '30px',
                        textStyle: {
                            color: 'white',
                            fontSize: 12
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [
                            '2020 - 5 - 1',
                            '2020 - 5 - 1',
                            '2020 - 5 - 1',
                            '2020 - 5 - 1',
                            '2020 - 5 - 1',
                            '2020 - 5 - 1',
                            '2020 - 5 - 1'
                        ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    color: '#4E88F7'
                                }
                            }
                        }
                    ]
                };
                // 防止越界，重绘canvas
                window.onresize = myChart.resize;
                myChart.setOption(option); // 设置option
            } else if (id === 'myChart2') {
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    title: {
                        text: '按天统计交易数',
                        x: '30px',
                        textStyle: {
                            color: 'white',
                            fontSize: 12
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    color: '#00ECF4'
                                }
                            }
                        }
                    ]
                };
                // 防止越界，重绘canvas
                window.onresize = myChart.resize;
                myChart.setOption(option); // 设置option
            } else if (id === 'myChart3') {
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    title: {
                        text: '按天统计交易数',
                        x: '30px',
                        textStyle: {
                            color: 'white',
                            fontSize: 12
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                            '6',
                            '7',
                            '8',
                            '9',
                            '10',
                            '11',
                            '12',
                            '13',
                            '14',
                            '15',
                            '16',
                            '17',
                            '18',
                            '19',
                            '20',
                            '21',
                            '22',
                            '23'
                        ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [
                                120, 200, 150, 80, 70, 110, 130, 130, 130, 130, 130, 130, 130, 130,
                                130, 130, 130, 230, 330, 230, 130, 500, 1100
                            ],
                            type: 'bar',
                            barWidth: 5,
                            itemStyle: {
                                normal: {
                                    color: '#FC8E4A'
                                }
                            }
                        }
                    ]
                };
                // 防止越界，重绘canvas
                window.onresize = myChart.resize;
                myChart.setOption(option); // 设置option
            }
        }
    }
};
</script>

<template>
    <div class="adress">
        <div class="left">
            <div class="top">
                <div style="font-size: 20px; margin-left: 20px; margin-top: 20px">地址标签</div>
                <div style="font-size: 30px; margin-left: 20px; margin-top: 20px">
                    NFT Collector
                </div>
            </div>

            <div class="mid">
                <div style="font-size: 20px; margin-left: 20px; margin-top: 20px">余额</div>
            </div>
            <div class="bottom"></div>
        </div>
        <div class="right">
            <div class="top">
                <div
                    id="myChart1"
                    :style="{ width: '1000px', height: '90%', marginTop: '40px' }"
                ></div>
            </div>
            <div class="bottom">
                <div class="left">
                    <div
                        id="myChart2"
                        :style="{ width: '480px', height: '90%', marginTop: '10px' }"
                    ></div>
                </div>
                <div class="right">
                    <div
                        id="myChart3"
                        :style="{ width: '480px', height: '90%', marginTop: '10px' }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.adress {
    width: 90%;
    height: 900px;
    display: flex;
    justify-content: space-between;

    .left {
        width: 500px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        .top {
            width: 480px;
            height: 290px;
            background-color: #001a2c;
        }
        .mid {
            width: 480px;
            height: 160px;
            background-color: #001a2c;
        }
        .bottom {
            width: 480px;
            height: 350px;
            background-color: #001a2c;
        }
    }
    .right {
        width: 1000px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .top {
            width: 1000px;
            height: 440px;
            background-color: #001a2c;
        }
        .bottom {
            width: 1000px;
            height: 400px;
            display: flex;
            justify-content: space-between;
            .left,
            .right {
                width: 480px;
                height: 400px;
                background-color: #001a2c;
            }
        }
    }
}
</style>

