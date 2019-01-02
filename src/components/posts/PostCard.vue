<template>
    <el-col :span="6">
        <el-card 
            class="post-card"
            shadow="hover">
            <div slot="header" class="post-header">
                <p>{{ post.title }}</p>
            </div>
            <p class="post-content">{{ post.body }}</p>
            <p class="nome-editor">Editor: {{ nome_editor }}</p>
            <p class="num-comentarios">Comentários: {{ num_comentarios }}</p>
        </el-card>
    </el-col>
</template>

<script>
export default {
    name: "PostCard",
    props: {
        post: Object
    },
    computed: {
        nome_editor() {
            return this.$store.getters['editores/getEditorById'](this.post.userId).name
        },
        num_comentarios() {
            return this.$store.getters['comentarios/countCommentsByPost'](this.post.id)
        }
    }
}
</script>

<style lang="scss">
.post-card {
    margin-bottom: 20px;
    height: 300px;

    .post-header {
        text-transform: uppercase;
        text-align: center;
    }

    .post-content {
        text-align: justify;
    }

    .nome-editor {
        font-weight: 700;
        margin-top: 20px;
    }

    .num-comentarios {
        font-weight: 700;
    }
} 

</style>
