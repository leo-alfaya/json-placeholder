<template>
    <div class="posts">
        <Header :indexMenu="2"></Header>
        <el-main>
            <el-row :gutter="20">
                <PostCard 
                    v-for="post in posts" 
                    v-bind:post="post"
                    v-bind:key="post.id">
                </PostCard>
            </el-row>
        </el-main>
    </div>
</template>

<script>
import Header from '../common/Header'
import PostCard from './PostCard'

export default {
    name: 'Posts',
    components: {
        Header,
        PostCard
    },
    computed: {
        posts () {
            if(!this.$route.params.id){
               return this.$store.state.posts.list
            } else {            
                return this.$store.getters['posts/getPostsByEditor'](this.$route.params.id)
            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>
