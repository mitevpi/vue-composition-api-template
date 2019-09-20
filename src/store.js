import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0
  },
  actions: {
    SET_NUMBER({ commit }, payload) {
      commit("SET_NUMBER", payload);
    },
    RESET_NUMBER({ commit }) {
      commit("RESET_NUMBER");
    }
  },
  mutations: {
    SET_NUMBER(state, payload) {
      state.number = payload;
    },
    RESET_NUMBER(state) {
      state.number = 0;
    }
  },
  getters: {
    number(state) {
      return state.number;
    }
  }
});
