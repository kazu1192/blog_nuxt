import bodyHtml from '../contents/json/sample01.json'

export const state = () => ({
  bodyData: bodyHtml
})

export const getters = {
  getAll(state) {
    return state.bodyData
  }
}
