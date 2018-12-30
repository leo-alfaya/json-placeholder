import Vue from 'vue'
import Vuex from 'vuex'
import editores from './modules/editores'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        editores
    }
})
