<template>
    <div class="editores">
        <Header></Header>
        <el-main>
            <el-row :gutter="20">
                <EditorCard 
                    v-for="editor in editores" 
                    v-bind:editor="editor"
                    v-bind:key="editor.id">
                </EditorCard>
            </el-row>
        </el-main>
    </div>
</template>

<script>
import Header from '../common/Header'
import EditorCard from './EditorCard'

export default {
    name: 'Editores',
    components: {
        Header,
        EditorCard
    },
    data() {
        return {
            editores: null
        }
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => (this.editores = response.data))
    }

}
</script>

<style scoped lang="scss">
</style>
