import Vue from 'vue'
import VueRouter from 'vue-router'

import Editores from '../components/editores/Editores'
import Posts from '../components/posts/Posts'

Vue.use(VueRouter)

const routes =  [
    { path: '/', name: 'editores', component: Editores },
    { path: '/posts', name: 'all_posts', component: Posts, },
    { path: '/posts/:id', name: 'user_posts', component: Posts}
]

export default new VueRouter({
    mode: 'history',
    routes
})
