<template>
    <el-col :span="6">
        <el-card 
            class="editor-card"
            shadow="hover">
            <div slot="header">
                <p>{{ editor.name }}</p>
            </div>
            <p>Nome de Usuário: {{ editor.username }}</p>
            <p>Email: {{ editor.email }}</p>
            <p>Cidade: {{ editor.address.city }}</p>
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
