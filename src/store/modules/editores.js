import axios from 'axios'

const state = {
    list: null
}

const actions = {
    getEditores ({ commit }) {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => { commit('setEditores', response.data)})
    }
}

const mutations = {
    setEditores (state, editores) {
        state.list = editores
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
