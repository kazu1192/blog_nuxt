import { fileMap, sourceFileArray } from '../contents/summary.json'

export const state = () => ({
  postList: []
})

export const actions = {
  getPostList({ commit }) {
    const result = { list: [] }
    sourceFileArray.map((file) => {
      // file = 'contents/markdown/****.md'
      // path = 'contents/json/****.json'
      const path = file
        .replace('contents/markdown', 'contents/json')
        .replace('.md', '.json')
      result.list.push(fileMap[path])
    })
    commit('postLoaded', result)
  }
}

export const mutations = {
  postLoaded(state, result) {
    state.postList.push(...result.list)
  }
}
