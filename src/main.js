import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "./css/style.css";
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAwesomePaginate)
  .mount("#app");
