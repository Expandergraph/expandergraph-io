
<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>

<template>
    <div class="adress">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>



<style lang="scss" scoped>
.adress {
    width: 90%;
    height: 700px;
    display: flex;
    justify-content: space-between;
    .left {
        width: 500px;
        height: 100%;
        background-color: #001a2c;
    }
    .right {
        width: 1000px;
        height: 100%;
        background-color: #001a2c;
    }
}
</style>

