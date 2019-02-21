import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numeroDeDias: 6,
    rutas:{}
  },
  mutations: {
    change (state, numeroDeDias) {
      state.numeroDeDias = numeroDeDias;
    },
    changeRutas (state, rutas) {
      state.rutas = rutas;
    },
  },
  getters: {
    numeroDeDias: state => state.numeroDeDias,
    rutas: state => state.rutas,
  }
})
