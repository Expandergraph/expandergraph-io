<script>
export default {
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            this.drawLine('myChart1');
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
        <div class="right"></div>
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

