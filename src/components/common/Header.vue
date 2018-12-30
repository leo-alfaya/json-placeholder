<template>
    <el-header class="header">
        <el-row 
            class="header-container" 
            type="flex"
            align="middle">
            <el-col 
                :span="24"
                class="header-logo">
                <a href="/">Gerencia Editores</a>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        background-color: #1E9DEB;

        &-container {
            height: 100%;
        }

        &-logo {
            a {
                color: #fff;
                font-weight: 700;
                font-size: 24px;
            }
        }
    }
</style>
