import { createStore } from "vuex";

export default createStore({
  state: {
    authToken: null,
    authUserCreds: null,
    bandwidthProfiles: null,
  },
  getters: {
    getAuthToken(state) {
      return state.authToken;
    },
    getAuthUser(state) {
      return state.authUserCreds;
    },
    getBandwidthProfiles(state) {
      return state.bandwidthProfiles;
    },
  },
  mutations: {
    authToken(state, payload) {
      state.authToken = payload;
    },
    authUserCreds(state, payload) {
      state.authUserCreds = payload;
    },
    bandwidthProfiles(state, payload) {
      state.bandwidthProfiles = payload;
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
    setBandwidthProfiles(_, payload) {
      this.commit("bandwidthProfiles", payload);
    },
  },
  modules: {},
});
