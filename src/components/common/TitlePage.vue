<template>
    <el-row class="titulo-pagina">
        <el-col :span="24">
            <h1>{{ title }}</h1>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "TitlePage",
    props: ['title']
}
</script>

<style lang="scss">
.titulo-pagina {
    padding: 30px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid #b9b9b9;
}
</style>
