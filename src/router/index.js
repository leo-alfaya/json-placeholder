import Vue from 'vue'
import VueRouter from 'vue-router'

import Editores from '../components/editores/Editores'
import Posts from '../components/posts/Posts'

Vue.use(VueRouter)

const routes =  [
    { path: '/', component: Editores },
    { path: '/posts/:id', component: Posts }
]

export default new VueRouter({
    routes
})
