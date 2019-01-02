import axios from 'axios'

const state = {
    list: null
}

const actions = {
    getPosts ({ commit }) {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => { commit('setPosts', response.data)})
    }
}

const mutations = {
    setPosts (state, posts) {
        state.list = posts
    }
}

const getters = {
    getPostsByEditor: (state) => (id) => {
        if(state.list){
            return state.list.filter(post => post.userId == id)
        }
    },
    countPostsByEditor: (state, getters) => (id) => {
        let posts =  getters.getPostsByEditor(id)
        
        if(posts) {
            return posts.length
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
