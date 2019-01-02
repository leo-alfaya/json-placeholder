import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import router from './router/index'

import App from './App.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store: store,
    router: router,
    created () {
        this.$store.dispatch('editores/getEditors')
        this.$store.dispatch('posts/getPosts')
        this.$store.dispatch('comentarios/getComments')
    }
}).$mount('#app')
