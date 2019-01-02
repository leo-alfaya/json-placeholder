<template>
    <el-header class="header">
        <el-row 
            class="header-container" 
            type="flex"
            align="middle">
            <el-col 
                :span="6"
                class="header-logo">
                <router-link to="/">Gerencia Editores</router-link>
            </el-col>
            <el-col 
                :span="18">
                <el-menu
                    :default-active="activeIndex"
                    mode="horizontal"
                    background-color="#1E9DEB"
                    text-color="white"
                    active-text-color="white">
                    <el-menu-item index="1"><router-link to="/">Editores</router-link></el-menu-item>
                    <el-menu-item index="2"><router-link to="/posts">Posts</router-link></el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: this.indexMenu.toString()
            }
        },
        props: ['indexMenu']
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
            border-right: 2px solid white;
            text-align: center;
            text-transform: uppercase;

            a {
                color: #fff;
                font-weight: 700;
                font-size: 20px;
            }
        }
    }
</style>
