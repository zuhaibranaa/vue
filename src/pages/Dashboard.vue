<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <Header
        :sidebarOpen="sidebarOpen"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <slot></slot>
        </div>
      </main>

      <!-- <Banner /> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from "../partials/Sidebar.vue";
import Header from "../partials/Header.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Header,
  },
  methods: {
    ...mapActions({
      fetchSuppliers: "accounting/fetchSuppliers",
      fetchCustomers: "auth/fetchCustomers",
      deleteSupplier: "accounting/deleteSupplier",
      uploadSupplier: "accounting/uploadNewSupplier",
      updateSupplier: "accounting/updateSupplier",
      deleteSupplier: "accounting/deleteSupplier",
    }),
  },
  beforeCreate() {
    if (!this.$store.getters["auth/getAuthToken"]) {
      this.$router.push("/login");
    }
    this.$store.dispatch("accounting/fetchDataFromServer");
  },
  created() {
    this.fetchCustomers();
    this.fetchSuppliers();
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen,
    };
  },
};
</script>
