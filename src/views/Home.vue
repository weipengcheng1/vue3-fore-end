<template>
    <div class="base-layout">
        <div class="nav-side"></div>
        <div class="content-right">
            <div class="nav-top">
                <div>面包屑</div>
                <div>用户信息</div>
            </div>
            <div class="wrapper p20">
                <div class="wrapper-content p-tp10">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        login() {
            this.$request.get("/login").then(resp => {
                console.log(resp)
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.base-layout {
    position: relative;
    display: flex;
    height: 100vh;

    .nav-side {
        flex: 0 0 200px;
        height: 100%;
        background-color: #001529;
        color: #ffffff;
        overflow-y: auto;
        transition: widht 0.5s;
    }

    .content-right {
        flex: 0 0 calc(100% - 200px);
        background-color: rgb(236, 238, 242);
    }

    .nav-top {
        height: 50px;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        background-color: #ffffff;
        padding: 0 20px;
    }

    .wrapper {
        width: 100%;
        box-sizing: border-box;
    }

    .wrapper-content {
        height: calc(100vh - 50px - 40px);
        background-color: #ffffff;
        border: 1px solid #ddd;
    }
}
</style>
