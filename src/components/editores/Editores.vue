<template>
    <div class="editores">
        <Header></Header>
        <el-main>
            <el-row :gutter="20">
                <EditorCard 
                    v-for="editor in list" 
                    v-bind:editor="editor"
                    v-bind:key="editor.id">
                </EditorCard>
            </el-row>
        </el-main>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex' 

import Header from '../common/Header'
import EditorCard from './EditorCard'

export default {
    name: 'Editores',
    components: {
        Header,
        EditorCard
    },
    computed: {
       ...mapState('editores', ['list']) 
    },
    methods: {
        ...mapActions('editores', ['getEditores'])
    },
    created () {
        this.getEditores()
    }
}
</script>

<style scoped lang="scss">
</style>
