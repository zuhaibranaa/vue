import { createStore } from "vuex";
import authStore from "./authStore";
import accountingStore from "./accountingStore";
import routerStore from "./routerStore";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});
export default createStore({
  modules: {
    auth: authStore,
    accounting: accountingStore,
    router: routerStore,
  },
  plugins: [vuexLocal.plugin],
});
