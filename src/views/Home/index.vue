<script>
const Web3 = require('../../js/web3');
export default {
    data() {
        return {
            value: '',
            show: false
        };
    },
    methods: {
        onclick() {
            Web3.default.Init((res) => {
                console.log(res);
            });
        },
        onSearch() {
            this.$router.push({
                path: '/home',

                query: {
                    value: this.value
                }
            });
        },
        ontry() {
            this.show = !this.show;
        }
    }
};
</script>

<template>
    <div class="index">
        <div class="index-header">
            <div class="header">
                <div class="left"></div>
                <div class="right">
                    <div>最新新闻</div>
                    <div>关于我们</div>
                    <div class="wallet" @click="onclick">钱包登录</div>
                    <div class="account">账号登录</div>
                </div>
            </div>
            <div class="index-title">一起探索区块链数据</div>
            <div class="index-des">
                ExpanderGraph数据淘金项目专注于区块链数据价值挖掘。<br />
                提供数据分析及可视化服务，通过算法实现项目评级、地址标注、地址监控等；
                基于区块链建立数据共享激励机制，<br />
                搭建去中心化的数据交易市场。
            </div>
            <div v-if="!show" class="index-btn" @click="ontry">立即试用</div>
            <div v-if="show" style="width: 100%; text-align: center; padding-top: 40px">
                <a-input-search
                    v-model="value"
                    placeholder="请输入地址/代币名称进行搜索"
                    enter-button
                    style="width: 660px"
                    @search="onSearch"
                />
            </div>
        </div>
        <div class="index-content">
            <div class="top">
                <img src="../../assets/img/home1.png" alt="" style="height: 360px; width: 600px" />
                <div class="des">
                    <div class="title">发现新机会</div>
                    <div>
                        超过 9000 万个带标签的钱包为您提供了解
                        ETH、稳定币和代币流动所需的完整背景信息。通过
                        ExpanderGraph，您可以获得有关资金流向的执行摘要。如果您需要详细信息，您可以将交易追踪到最细粒度的级别。
                    </div>
                </div>
            </div>
            <div class="mid">
                <div class="des">
                    <div class="title">进行尽职调查</div>
                    <div>
                        ExpanderGraph
                        跟踪交易所、代币团队和基金，这意味着您可以准确地看到哪些实体正在积累或出售特定代币。提供有关使用情况、参与度和流动性的代币指标，因此您可以在投资新代币之前做出明智的决定。
                    </div>
                </div>
                <img src="../../assets/img/home2.png" alt="" style="height: 360px; width: 600px" />
            </div>
            <div class="bottom">
                <img src="../../assets/img/home3.png" alt="" style="height: 360px; width: 600px" />

                <div class="des">
                    <div class="title">探索新项目</div>
                    <div>
                        跨链分析 - 以正确的方式呈现。ExpanderGraph
                        您提供了寻找可能未知的信号的工具。我们将多链数据和标记地址相结合，在理解复杂的区块链世界方面非常强大。s
                    </div>
                </div>
            </div>
        </div>
        <div class="index-mark">
            <div class="title">受到加密领域最聪明团队的喜爱</div>
            <div class="content">
                “ExpanderGraph是我进行加密分析的首选工具，因为它独特地将链上数据与丰富的钱包数据库相结合。简而言之，我不会在没有事先咨询的情况下做出投资决定。”
            </div>
            <div class="name">-某资本投资主管</div>

            <div class="content">
                “ExpanderGraph
                绝对是史诗级的！一个不可或缺的工具，用于识别哪些代币正在累积，哪些正在分发。没有它我不再购买或持有加密资产。但警告，ExpanderGraph
                可能会上瘾！”
            </div>
            <div class="name">-马可·L</div>
        </div>
        <div class="index-partner" style="text-align: center">
            <img src="../../assets/img/home4.png" alt="" style="width: 85%; margin-top: 20px" />
        </div>
        <div class="index-footer">
            <div class="left"></div>
            <div class="right">
                <div class="con">
                    <div class="title">关于我们</div>
                    <a href="https://github.com/yahtoo" target="_blank">Github</a> <br />
                    <a href="https://www.overleaf.com/project/60be90035f8d165c0ad1f25f">白皮书</a>
                </div>
                <div class="email">
                    <div class="title">联系我们</div>
                    <div>Twitter：@expander_graph</div>
                    <div>微信公众号：ExpanderGraph</div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.index {
    // height: 100%;
    &-header {
        height: 410px;
        background-color: #001421;
        .header {
            height: 60px;
            display: flex;
            align-items: center;
            padding-left: 20px;
            padding-right: 20px;
            justify-content: space-between;
            .left {
                width: 180px;
                height: 45px;
                background-image: url('../../assets/img/LOGO.png');
                background-size: 100% 100%;
            }
            .right {
                display: flex;
                color: white;
                width: 400px;
                justify-content: space-between;
                .wallet:hover {
                    background-color: #4090f8;
                    padding-left: 10px;
                    padding-right: 10px;
                    border-radius: 20px;
                    cursor: pointer;
                }

                .account:hover {
                    background-color: #4090f8;
                    padding-left: 10px;
                    padding-right: 10px;
                    border-radius: 20px;
                    cursor: pointer;
                }
            }
        }
    }
    &-title {
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        margin-top: 40px;
        margin-left: 150px;
    }
    &-des {
        color: #fff;
        margin-left: 150px;
        margin-top: 40px;
        line-height: 40px;
        font-size: 18px;
    }
    &-btn {
        width: 150px;
        height: 40px;
        background-color: #9de9db;
        border-radius: 20px;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
        margin-left: 150px;
        margin-top: 40px;
    }
    &-btn:hover {
        cursor: pointer;
    }
    &-content {
        width: 85%;
        // height: 700px;
        background-color: #fff;
        margin: 0 auto;
        .top,
        .mid,
        .bottom {
            height: 400px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .des {
                width: 40%;
                .title {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
            }
        }
    }
    &-mark {
        height: 400px;
        width: 100%;
        background-color: #001421;
        margin-top: 20px;
        color: white;
        .title {
            width: 600px;
            font-size: 22px;
            font-weight: 600;
            margin: 0 auto;
            padding-top: 50px;
            text-align: center;
        }
        .content {
            width: 600px;
            margin: 0 auto;
            margin-top: 40px;
        }
        .name {
            width: 600px;
            margin: 0 auto;
            text-align: right;
        }
    }
    &-partner {
        height: 300px;
        width: 100%;
        background-color: #fff;
    }
    &-footer {
        height: 300px;
        width: 100%;
        background-color: #001421;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 40px;
        padding-right: 40px;
        .left {
            width: 15%;
            height: 70px;
            background-image: url('../../assets/img/LOGO.png');
            background-size: 90% 90%;
            background-repeat: no-repeat;
        }
        .right {
            width: 60%;
            height: 150px;
            color: white;
            display: flex;
            text-align: left;
            .con {
                line-height: 40px;
                margin-right: 120px;
            }
            .email {
                line-height: 40px;
            }
        }
    }
    /deep/.ant-input-group .ant-input {
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;
        background-color: #162e46;
        border-color: #162e46;
        color: white;
    }
    /deep/.ant-input-group-addon .ant-input-search-button {
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        background-color: rgb(66, 137, 242);
    }
    /deep/.ant-input-group-addon {
        background-color: transparent;
    }
}
</style>

