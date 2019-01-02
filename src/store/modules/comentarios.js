import axios from 'axios'

const state = {
    list: null
}

const actions = {
    getComments ({ commit }) {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(response => { commit('setComments', response.data)})
    }
}

const mutations = {
    setComments (state, comments) {
        state.list = comments
    }
}

const getters = {
    countCommentsByPost: (state) => (id) => {
        if(state.list){
            return state.list.filter(comment => comment.postId == id).length
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
