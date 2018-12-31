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
    countPostsByEditor: (state) => (id) => {
        if(state.list){
            return state.list.filter(editor => editor.userId == id).length
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
