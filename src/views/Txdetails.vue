<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>


<template>
    <div class="tx">
        <div class="tx-top">
            <div class="left"></div>
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
            height: 500px;
            background-color: #001a2c;
        }
        .right {
            width: 820px;
            height: 500px;
            background-color: #001a2c;
        }
    }
}
</style>
