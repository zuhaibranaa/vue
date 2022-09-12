import actions from "./routerStore/actions";
import mutations from "./routerStore/mutations";
import getters from "./routerStore/getters";
import state from "./routerStore/state";
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
