<template>
    <el-col :span="6">
        <el-card 
            class="editor-card"
            shadow="hover">
            <span>{{ editor.name }}</span>
        </el-card>
    </el-col>
</template>

<script>
export default {
    name: "EditorCard",
    props: {
        editor: Object
    }
}
</script>

<style lang="scss">
.editor-card {
    margin-bottom: 20px;
} 
</style>
