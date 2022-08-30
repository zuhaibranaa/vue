import { createStore } from "vuex";

export default createStore({
  state: {
    authToken: null,
    authUserCreds: null,
  },
  getters: {
    getAuthToken(state) {
      return state.authToken;
    },
    getAuthUser(state) {
      return state.authUserCreds;
    },
  },
  mutations: {
    authToken(state, payload) {
      state.authToken = payload;
    },
    authUserCreds(state, payload) {
      state.authUserCreds = payload;
    },
  },
  actions: {
    doLogin(state, payload) {
      this.commit("authToken", payload.token);
      this.commit("authUserCreds", payload.user);
    },
    doLogout() {
      this.commit("authToken", null);
      this.commit("authUserCreds", null);
    },
  },
  modules: {},
});
