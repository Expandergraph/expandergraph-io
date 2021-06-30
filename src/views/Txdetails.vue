<script>
const columns = [
    {
        title: '转账地址',
        dataIndex: 'adress'
    },
    {
        title: '交易数',

        scopedSlots: { customRender: 'address' }
    },
    {
        title: 'ETH交易总量',
        scopedSlots: { customRender: 'address' }
    },
    {
        title: 'ETH转出总量',
        scopedSlots: { customRender: 'address' }
    },
    {
        title: 'ETH转入总量',
        scopedSlots: { customRender: 'address' }
    },
    {
        title: '总交易数',
        scopedSlots: { customRender: 'address' }
    },
    {
        title: '转入token交易数',
        scopedSlots: { customRender: 'address' }
    },
    {
        title: '转出token交易数',
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
            chartPie: null,
            total: 1000,

            dataList,
            columns,
            list: [
                {
                    value: 100,
                    name: 'Uniswap'
                },
                {
                    value: 10,
                    name: 'OKEx'
                },
                {
                    value: 80,
                    name: 'Sushiswap'
                },
                {
                    value: 80,
                    name: 'Huobi'
                },
                {
                    value: 120,
                    name: 'Binance'
                }
            ]
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.drawPieChart('chartPie1');
            this.drawPieChart('chartPie2');
        });
    },
    methods: {
        drawPieChart(id) {
            if (id === 'chartPie1') {
                this.chartPie = this.$echarts.init(document.getElementById(id), 'macarons');
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
                                    formatter:
                                        '{total|' + this.total + '}' + '\n\r' + '{active|总量}',
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
            } else {
                this.chartPie = this.$echarts.init(document.getElementById(id), 'macarons');
                let option = {
                    title: {
                        text: 'ETH转出',
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
                            name: 'ETH转出',
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
                                    formatter:
                                        '{total|' + this.total + '}' + '\n\r' + '{active|总量}',
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
        },
        rowClassName(record, index) {
            let className1 = 'c1';
            let className2 = 'c2';

            if (index % 2 === 1) {
                return className1;
            } else {
                return className2;
            }
        }
    }
};
</script>


<template>
    <div class="tx">
        <div class="tx-top">
            <div class="left">
                <div id="chartPie1" class="pie-wrap" style="width: 100%; height: 80%"></div>
            </div>
            <div class="right">
                <div id="chartPie2" class="pie-wrap" style="width: 100%; height: 80%"></div>
            </div>
        </div>
        <div class="tx-bottom">
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
    &-bottom {
        width: 1700px;
        height: 500px;
        background-color: #001a2c;
        margin-top: 20px;
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
