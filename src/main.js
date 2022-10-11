import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "./css/style.css";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import logoutPlugin from "vue-auto-logout";

const logoutOptions = {
  stagnateTime: 30 * 60 * 1000,
  detectTime: 30 * 60,
  keyName: "auth/authToken",
};
const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAwesomePaginate)
  .mount("#app")
  .use(logoutPlugin, logoutOptions);
