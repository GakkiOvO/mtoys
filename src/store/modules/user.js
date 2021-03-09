const userState = JSON.parse(sessionStorage.getItem('user')) || {}

export default {
  namespaced: true,
  state: {
    categories: [],
    products: [],
    ...userState,
  },

  mutations: {
    updateState(state, data) {
      for (const key in data) {
        state[key] = data[key]
      }
      sessionStorage.setItem('user', JSON.stringify(state))
    },
  },
}
