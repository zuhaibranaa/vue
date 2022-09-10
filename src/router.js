import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import DashboardHome from "./pages/DashboardHome.vue";
import Homepage from "./pages/Homepage.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Profiles from "./pages/Profiles.vue";
import Invoices from "./pages/Invoices.vue";
import Nas from "./pages/Nas.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      children: [
        {
          path: "",
          component: DashboardHome,
        },
        {
          path: "profiles",
          component: Profiles,
        },

        {
          path: "ecommerce/invoices",
          component: Invoices,
        },
        {
          path: "nas",
          component: Nas,
        },
      ],
    },
  ],
});

export default router;
