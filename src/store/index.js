import { createStore } from "vuex";
import authStore from "./authStore";
import accountingStore from "./accountingStore";
import routerStore from "./routerStore";
export default createStore({
  modules: {
    auth: authStore,
    accounting: accountingStore,
    router: routerStore,
  },
  state: {
    bandwidthProfiles: null,
    customers: null,
    users: null,
  },
  getters: {
    getBandwidthProfiles(state) {
      return state.bandwidthProfiles;
    },
  },
  mutations: {
    bandwidthProfiles(state, payload) {
      state.bandwidthProfiles = payload;
    },
  },
  actions: {
    setBandwidthProfiles(_, payload) {
      this.commit("bandwidthProfiles", payload);
    },
  },
});
