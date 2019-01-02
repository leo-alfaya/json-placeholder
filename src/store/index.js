import Vue from 'vue'
import Vuex from 'vuex'
import editores from './modules/editores'
import posts from './modules/posts'
import comentarios from './modules/comentarios'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        editores,
        posts,
        comentarios
    }
})
