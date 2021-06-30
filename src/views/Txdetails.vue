<script>
export default {
    data() {
        return {
            chartPie: null,
            total: 1000,
            list: [
                { value: 335, name: 'Uniswap' },
                { value: 310, name: 'OKEx' },
                { value: 234, name: 'Binance' },
                { value: 135, name: 'Huobi' },
                { value: 1548, name: 'Sushiswap' }
            ]
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.drawPieChart();
        });
    },
    methods: {
        drawPieChart() {
            this.chartPie = this.$echarts.init(document.getElementById('chartPie'), 'macarons');
            let option = {
                title: {
                    text: 'ETH转入',
                    x: '50px',
                    y: '30px',
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    data: ['Uniswap', 'OKEx', 'Binance', 'Huobi', 'Sushiswap'],
                    x: '50px',
                    y: '100px',
                    orient: 'vertical',

                    itemGap: 25,
                    textStyle: {
                        color: '#ffffff',
                        padding: 10,
                        align: 'right'
                    },
                    formatter: function (name) {
                        // 获取legend显示内容
                        let list = option.series[0].data;
                        let total = 0;
                        let tarValue = 0;
                        for (let i = 0, l = list.length; i < l; i++) {
                            total += list[i].value;
                            if (list[i].name === name) {
                                tarValue = list[i].value;
                            }
                        }
                        let p = ((tarValue / total) * 100).toFixed(2);
                        return name + ' ' + ' ' + p + '%';
                    }
                },
                series: [
                    {
                        name: 'ETH转入',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: ['70%', '60%'],
                        label: {
                            show: false,
                            position: 'center',
                            normal: {
                                show: true,
                                position: 'center',
                                color: '#4c4a4a',
                                formatter: '{total|' + this.total + '}' + '\n\r' + '{active|总量}',
                                rich: {
                                    total: {
                                        fontSize: 35,
                                        fontFamily: '微软雅黑',
                                        color: '#ffffff'
                                    },
                                    active: {
                                        fontFamily: '微软雅黑',
                                        fontSize: 16,
                                        color: '#ffffff',
                                        lineHeight: 30
                                    }
                                }
                            },
                            emphasis: {
                                // 中间文字显示
                                show: true
                            }
                        },

                        data: this.list
                    }
                ]
            };
            this.chartPie.setOption(option);
        }
    }
};
</script>


<template>
    <div class="tx">
        <div class="tx-top">
            <div class="left">
                <div id="chartPie" class="pie-wrap" style="width: 100%; height: 80%"></div>
            </div>
            <div class="right"></div>
        </div>
        <div class="tx-top"></div>
    </div>
</template>



<style lang="scss" scoped>
.tx {
    height: 100%;
    &-top {
        width: 1700px;
        display: flex;
        justify-content: space-between;
        .left {
            width: 820px;
            height: 400px;
            background-color: #001a2c;
        }
        .right {
            width: 820px;
            height: 400px;
            background-color: #001a2c;
        }
    }
}
</style>
