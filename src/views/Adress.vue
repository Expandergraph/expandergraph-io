
<script>
export default {
    name: '',
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let myChart = this.$echarts.init(document.getElementById('myChart')); // 获取容器元素
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                title: {
                    text: '总交易数统计',
                    x: '50px',
                    y: '20px',
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
                        barWidth: 30
                    }
                ]
            };
            // 防止越界，重绘canvas
            window.onresize = myChart.resize;
            myChart.setOption(option); // 设置option
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
                    id="myChart"
                    :style="{ width: '1000px', height: '90%', marginTop: '40px' }"
                ></div>
            </div>
            <div class="bottom"></div>
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
            background-color: #001a2c;
        }
    }
}
</style>

