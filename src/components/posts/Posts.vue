<template>
    <div class="posts">
        <Header></Header>
        <el-main>
            <h1>teste</h1>
        </el-main>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Header from '../common/Header'
import PostCard from './PostCard'

export default {
    name: 'Posts',
    components: {
        Header,
        PostCard
    },
    computed: mapState({
        posts: state => state.posts.list,
    })
}
</script>

<style scoped lang="scss">
</style>
