<template>
    <el-col :span="6">
        <router-link :to="{ name: 'user_posts', params: { id: editor.id }}">
            <el-card 
                class="editor-card"
                shadow="hover">
                <div slot="header">
                    <p>{{ editor.name }}</p>
                </div>
                <p>Nome de Usuário: {{ editor.username }}</p>
                <p>Email: {{ editor.email }}</p>
                <p>Cidade: {{ editor.address.city }}</p>
                <p class="num-posts">Posts: {{ num_posts }}</p>
            </el-card>
        </router-link>
    </el-col>
</template>

<script>
export default {
    name: "EditorCard",
    props: {
        editor: Object
    },
    computed: {
        num_posts() {
            return this.$store.getters['posts/countPostsByEditor'](this.editor.id)
        }
    }
}
</script>

<style lang="scss">
.editor-card {
    margin-bottom: 20px;
} 
.num-posts {
    margin-top: 20px;
    font-weight: 700;
}
</style>
