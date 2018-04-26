import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    gettoken (state) {
      return state.token
    }
  },
  mutations: {
    changetoken (state, payload) {
      state.token = payload.token
    }
  },
  actions: {
  }
})
