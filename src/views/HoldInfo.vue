<script>
export default {
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            this.drawLine('myChart1');
            this.drawLine('myChart2');
        });
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
                        x: '50px',
                        textStyle: {
                            color: 'white',
                            fontSize: 12
                        }
                    },
                    legend: {
                        data: ['流通数量', '交易所'],
                        x: '50px',
                        y: '25px',
                        textStyle: {
                            color: 'white'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['7天以内', '7-30天']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '流通数量',
                            type: 'bar',
                            barWidth: 100,
                            barGap: '0%',
                            itemStyle: {
                                normal: {
                                    color: '#5A77F8'
                                }
                            },
                            data: [200, 100]
                        },
                        {
                            name: '交易所',
                            type: 'bar',　
                            barWidth: 100,
                            itemStyle: {
                                normal: {
                                    color: '#4DD2C9'
                                }
                            },
                            data: [300, 400]
                        }
                    ]
                };
                // 防止越界，重绘canvas
                window.onresize = myChart.resize;
                myChart.setOption(option); // 设置option
            } else {
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },

                    calculable: true,
                    title: {
                        text: '持仓地址变化',
                        x: '50px',
                        textStyle: {
                            color: 'white',
                            fontSize: 12
                        }
                    },
                    xAxis: [
                        {
                            // axisLabel: {
                            //     rotate: 30,
                            //     interval: 0
                            // },
                            axisLine: {
                                lineStyle: {
                                    color: '#CECECE'
                                }
                            },
                            type: 'category',
                            boundaryGap: false,
                            data: [2015, 2016, 2017, 2018, 2019, 2020, 2021]
                            // data: (function () {
                            //     let list = [];
                            //     for (let i = 10; i <= 18; i++) {
                            //         if (i <= 12) {
                            //             list.push('2016-' + i + '-01');
                            //         } else {
                            //             list.push('2017-' + (i - 12) + '-01');
                            //         }
                            //     }
                            //     return list;
                            // })()
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#CECECE'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            symbol: 'none',
                            smooth: 0.2,
                            color: ['#F6903D'],
                            data: [1000, 10001, 10003, 20001, 4000, 5000, 60000],
                            areaStyle: {
                                normal: {
                                    color: '#95562A'
                                }
                            }
                        }
                    ]
                };
                window.onresize = myChart.resize;
                myChart.setOption(option); // 设置option
            }
        }
    }
};
</script>


<template>
    <div class="hold">
        <div class="left">
            <div id="myChart1" style="width: 800px; height: 100%; margin-top: 20px"></div>
        </div>
        <div class="right">
            <div id="myChart2" style="width: 800px; height: 100%; margin-top: 20px"></div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.hold {
    width: 1650px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    .left,
    .right {
        width: 800px;
        height: 100%;
        background-color: #001a2c;
    }
}
</style>

