<template>
    <div class="editores">
        <Header :indexMenu="1"></Header>
        <el-main>
            <TitlePage title="Editores"></TitlePage>
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
import { mapState } from 'vuex'

import Header from '../common/Header'
import TitlePage from '../common/TitlePage'
import EditorCard from './EditorCard'

export default {
    name: 'Editores',
    components: {
        Header,
        TitlePage,
        EditorCard
    },
    computed: mapState({
        editores: state => state.editores.list,
    })
}
</script>

<style scoped lang="scss">
</style>
