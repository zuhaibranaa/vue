import { createStore } from "vuex";
import authStore from "./authStore";
import accountingStore from "./accountingStore";
import routerStore from "./routerStore";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
export default createStore({
  plugins: [vuexLocal.plugin],
  modules: {
    auth: authStore,
    accounting: accountingStore,
    router: routerStore,
  },
});
