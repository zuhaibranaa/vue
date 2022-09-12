import actions from "./accountingStore/actions";
import mutations from "./accountingStore/mutations";
import getters from "./accountingStore/getters";
import state from "./accountingStore/state";
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
