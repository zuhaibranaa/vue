export default {
  //   namespaced: true,
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
  actions: {
    doLogin(_, payload) {
      this.commit("authToken", payload.token);
      this.commit("authUserCreds", payload.user);
    },
    doLogout() {
      this.commit("authToken", null);
      this.commit("authUserCreds", null);
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
};
