<script>
export default {
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            this.drawLineChart('chartLine');
        });
    },
    methods: {
        drawLineChart(id) {
            let myChart = this.$echarts.init(document.getElementById(id));

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
                <div id="chartLine" class="line-wrap" style="width: 100%; height: 330px"></div>
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
}
</style>

