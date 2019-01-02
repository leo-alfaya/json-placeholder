import axios from 'axios'

const state = {
    list: null
}

const actions = {
    getEditors ({ commit }) {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => { commit('setEditors', response.data)})
    }
}

const mutations = {
    setEditors (state, editors) {
        state.list = editors
    }
}

const getters = {
    getEditorById: (state) => (id) => {
        if(state.list){
            return state.list.find(user => user.id == id)
        }
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
