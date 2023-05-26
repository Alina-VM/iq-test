import { createStore } from 'vuex'

export default createStore({
  state: {
    showBurgerMenu: false,
  },
  getters: {
  },
  mutations: {
    changeBurgerState(state, payload) {
      state.showBurgerMenu = payload
    },

  },
  actions: {
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
})
