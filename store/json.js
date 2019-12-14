import axios from 'axios'

export const state = () => ({
  items: []
})

export const mutations = {
  setList(state, items) {
    state.items = items
  }
}

export const getters = {
  items: (state) => state.items
}

export const actions = {
  async getList({ commit }) {
    const res = await axios.$get('@/contents/json/sample01.json')
    commit('setList', res)
  }
}
