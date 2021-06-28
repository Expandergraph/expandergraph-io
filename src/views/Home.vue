<script>
export default {
    data() {
        return {};
    },
    created() {},

    methods: {
        onSearch(value) {
            console.log(value);
        }
    }
};
</script>


<template>
    <div class="home">
        <div class="home-header">
            <img src="../assets/img/LOGO.png" alt="" />
        </div>
        <div class="home-query">
            <div class="left">我的钱包</div>
            <div class="right">
                <a-input-search
                    placeholder="请输入地址/代币名称进行搜索"
                    enter-button
                    style="width: 660px"
                    @search="onSearch"
                />
                <div>帮助中心</div>
                <div>我的钱包</div>
                <div>退出登录</div>
            </div>
        </div>
        <div class="home-tab">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="home-content">这是content</div>
    </div>
</template>


<style lang="scss" scoped>
.home {
    background-color: #001421;
    height: 100vh;
    color: white;
    &-header {
        height: 60px;
        border-bottom: 1px solid #133752;
        display: flex;
        align-items: center;
        padding-left: 20px;
        img {
            width: 160px;
            height: 40px;
        }
    }
    &-query {
        height: 60px;
        border-bottom: 1px solid #133752;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            width: 80px;
            height: 100%;
            color: #477ee6;
            text-align: center;
            line-height: 60px;
        }
        .right {
            width: 1000px;
            height: 40px;
            align-items: center;
            justify-content: space-around;
            display: flex;
            /deep/.ant-input-group .ant-input {
                border-bottom-left-radius: 50px;
                border-top-left-radius: 50px;
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
    }
    &-tab {
        height: 60px;
        border-bottom: 1px solid #133752;
        .left {
            width: 180px;
            height: 100%;
            background-color: white;
            border-right: 1px solid #133752;
        }
    }
}
</style>
