import { createRouter, createWebHistory } from "vue-router";
import DashboardHome from "./pages/DashboardHome.vue";
import Homepage from "./pages/Homepage.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Profiles from "./pages/Profiles.vue";
import Invoices from "./pages/Invoices.vue";
import Payments from "./pages/Payments.vue";
import Suppliers from "./pages/Suppliers.vue";
import Journal from "./pages/Journal.vue";
import Inventory from "./pages/Inventory.vue";
import Customers from "./pages/Customers.vue";
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
      component: DashboardHome,
    },
    {
      path: "/dashboard/profiles",
      component: Profiles,
    },

    {
      path: "/dashboard/users/customers",
      component: Customers,
    },
    {
      path: "/dashboard/ecommerce/invoices",
      component: Invoices,
    },
    {
      path: "/dashboard/ecommerce/payments",
      component: Payments,
    },
    {
      path: "/dashboard/ecommerce/inventory",
      component: Inventory,
    },
    {
      path: "/dashboard/ecommerce/journal",
      component: Journal,
    },
    {
      path: "/dashboard/ecommerce/suppliers",
      component: Suppliers,
    },
  ],
});

export default router;
