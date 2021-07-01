<script>
const columns = [
    {
        title: '交易所',
        dataIndex: 'adress'
    },
    {
        title: '余额',
        scopedSlots: { customRender: 'address' }
    },
    {
        title: '变化量',
        scopedSlots: { customRender: 'address' }
    },
    {
        title: '首次交易时间',
        scopedSlots: { customRender: 'address' }
    }
];
const dataList = [
    {
        address: 12
    },
    {
        address: 12
    },
    {
        address: 12
    },
    {
        address: 12
    },
    {
        address: 12
    }
];
export default {
    data() {
        return {
            columns,
            dataList
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.drawLineChart('chartLine1');
            this.drawLineChart('chartLine2');
        });
    },
    methods: {
        drawLineChart(id) {
            let myChart = this.$echarts.init(document.getElementById(id));

            if (id === 'chartLine1') {
                // 基于准备好的dom，初始化echarts实例
                let option = {
                    title: {
                        text: '交易数：交易所和交易人',
                        textStyle: {
                            fontWeight: 'normal',
                            color: '#A3FFFC' // 标题颜色
                        }
                    },

                    color: ['#5A77F8', '#3E9397'],

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['去中心化交易人员', '交易所'],
                        textStyle: {
                            color: 'white'
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisTick: {
                                show: false
                            },

                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#0B2F48' // y轴分割线颜色
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '去中心化交易人员',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '交易所',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option);
            } else {
                // 基于准备好的dom，初始化echarts实例
                let option = {
                    title: {
                        // text: '各交易所交易量（最近60天）',
                        textStyle: {
                            fontWeight: 'normal',
                            color: '#A3FFFC' // 标题颜色
                        }
                    },

                    color: ['#5A77F8', '#3E9397', '#FF4F3A', '#2DBB87', '#FD323A'],

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['Uniswap', 'MXC', 'Binance', 'Other', 'Gate.io'],
                        textStyle: {
                            color: 'white'
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisTick: {
                                show: false
                            },

                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#0B2F48' // y轴分割线颜色
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: 'Uniswap',
                            type: 'line',
                            stack: '总量',
                            data: [3210, 3322, 3011, 3324, 1110, 3310, 320]
                        },
                        {
                            name: 'MXC',
                            type: 'line',
                            stack: '总量',
                            data: [121, 2121, 9011, 934, 12790, 1330, 1320]
                        },
                        {
                            name: 'Gate.io',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 9021, 934, 12970, 1330, 61320]
                        },

                        {
                            name: 'Binance',
                            type: 'line',
                            stack: '总量',
                            data: [820, 9132, 901, 934, 1290, 1330, 11320]
                        },
                        {
                            name: 'Other',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 9011, 934, 1290, 1330, 12320]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option);
            }
        }
    }
};
</script>

<template>
    <div class="info">
        <div class="top">
            <div class="left">
                <div>流通比</div>
                <div>0.67%</div>
            </div>
            <div class="right">
                <div id="chartLine1" class="line-wrap" style="width: 100%; height: 330px"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <div id="chartLine2" class="line-wrap" style="width: 100%; height: 450px"></div>
            </div>
            <div class="right">
                <a-table
                    :columns="columns"
                    :data-source="dataList"
                    :rowClassName="rowClassName"
                    :pagination="false"
                >
                    <div slot="address" slot-scope="text, record">
                        <a-progress :percent="30" size="small" strokeColor="#52BEDD" />
                    </div>
                </a-table>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.info {
    .top {
        width: 1650px;
        height: 350px;
        display: flex;
        justify-content: space-between;
        .left {
            width: 400px;
            height: 340px;
            background-color: #001a2c;
            div {
                text-align: center;
                margin-top: 10px;
            }
            div:first-child {
                text-align: center;
                margin-top: 150px;
            }
        }
        .right {
            width: 1200px;
            height: 340px;
            background-color: #001a2c;
        }
    }
    .bottom {
        width: 1650px;
        height: 450px;
        display: flex;
        justify-content: space-between;
        .left,
        .right {
            width: 49%;
            height: 450px;
            background-color: #001a2c;
        }
    }
    /deep/.ant-table-thead > tr > th {
        color: #86929d;
        background: #00263c !important;
    }
    /deep/.ant-table-row:hover > td {
        background: transparent !important;
    }
    /deep/.c1 {
        background-color: #001a2c;
        color: white;
    }
    /deep/.c2 {
        background-color: #00263c;
        color: white;
    }
    /deep/.ant-progress-text {
        color: white;
    }
}
</style>

