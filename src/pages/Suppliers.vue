<template>
  <Dashboard>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <!-- Page header -->
      <div class="sm:flex sm:justify-between sm:items-center mb-5">
        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">
            Suppliers ✨
          </h1>
        </div>

        <!-- Right: Actions -->
        <div
          class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
        >
          <!-- Search form -->
          <form class="relative">
            <label for="action-search" class="sr-only">Search</label>
            <input
              id="action-search"
              class="form-input pl-9 focus:border-gray-300"
              type="search"
              placeholder="Search by Supplier ID…"
            />
            <button
              class="absolute inset-0 right-auto group"
              type="submit"
              aria-label="Search"
            >
              <svg
                class="w-4 h-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>
          </form>

          <!-- Add member button -->
          <PopupModal message="New Supplier" :showModal="createActive">
            <template #footer>
              <button
                class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="toggleModal"
              >
                Close
              </button>
              <button
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="storeNewSupplier"
              >
                Save
              </button>
            </template>
            <template #button>
              <CreateNewButton
                :message="'Create New Supplier'"
                @clickToggle="toggleModal"
              />
            </template>
            <div class="pt-3">
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Supplier Name"
                />
              </div>
            </div>
            <div class="pt-3">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Supplier Email"
                />
              </div>
            </div>
            <div class="pt-3">
              <label
                for="address"
                class="block text-sm font-medium text-gray-700"
                >Address</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  v-model="address"
                  type="text"
                  name="address"
                  id="address"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Supplier Address"
                />
              </div>
            </div>
            <div class="pt-3">
              <label
                for="mobile"
                class="block text-sm font-medium text-gray-700"
                >Mobile</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <span class="text-gray-500 sm:text-sm">03</span>
                </div>
                <input
                  v-model="contact"
                  type="text"
                  name="mobile"
                  id="mobile"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="001234567"
                />
              </div>
            </div>
          </PopupModal>
        </div>
      </div>

      <!-- More actions -->
      <div class="sm:flex sm:justify-between sm:items-center mb-5">
        <!-- Left side -->

        <!-- Right side -->
        <div
          class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
        >
          <!-- Delete button -->
          <div class="table-items-action hidden">
            <div class="flex items-center">
              <div
                class="hidden xl:block text-sm italic mr-2 whitespace-nowrap"
              >
                <span class="table-items-count"></span> items selected
              </div>
              <button
                class="btn bg-white border-gray-200 hover:border-gray-300 text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-white shadow-lg rounded-sm border border-gray-200 mb-8">
        <header class="px-5 py-4">
          <h2 class="font-semibold text-gray-800">
            Suppliers
            <span class="text-gray-400 font-medium">{{
              suppliersLength()
            }}</span>
          </h2>
        </header>
        <div x-data="handleSelect">
          <!-- Table -->
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <!-- Table header -->
              <thead
                class="text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200"
              >
                <tr>
                  <th
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
                  ></th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">ID</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">E-Mail</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Address</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Contact Number</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Actions</div>
                  </th>
                </tr>
              </thead>
              <!-- Table body -->
              <tbody class="text-sm divide-y divide-gray-200">
                <!-- Row -->
                <tr v-for="supplier in getSuppliers" :key="supplier.id">
                  <td
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
                  >
                    <div class="flex items-center"></div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-medium text-orange-300">
                      {{ "#" + supplier.id }}
                    </div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-medium text-green-500">
                      {{ supplier.name }}
                    </div>
                  </td>

                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>{{ supplier.email }}</div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-medium text-gray-800">
                      {{ supplier.address }}
                    </div>
                  </td>

                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>+92 {{ supplier.mobile }}</div>
                  </td>

                  <td
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
                  >
                    <div class="space-x-1">
                      <PopupModal
                        message="Update Supplier"
                        :showModal="updateOpen"
                      >
                        <template #footer>
                          <button
                            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            @click="toggleUpdate(null)"
                          >
                            Close
                          </button>
                          <button
                            class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            @click="doUpdate(update)"
                          >
                            Save
                          </button>
                        </template>
                        <template #button>
                          <button
                            @click="toggleUpdate(supplier.id)"
                            class="text-gray-400 hover:text-gray-500 rounded-full"
                          >
                            <span class="sr-only">Edit</span>
                            <svg
                              class="w-8 h-8 fill-current"
                              viewBox="0 0 32 32"
                            >
                              <path
                                d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z"
                              />
                            </svg>
                          </button>
                        </template>
                        <div class="pt-3">
                          <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                            >Name</label
                          >
                          <div class="relative mt-1 rounded-md shadow-sm">
                            <input
                              v-model="update.name"
                              type="text"
                              name="name"
                              id="name"
                              class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter Supplier Name"
                            />
                          </div>
                        </div>
                        <div class="pt-3">
                          <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                            >Email</label
                          >
                          <div class="relative mt-1 rounded-md shadow-sm">
                            <input
                              v-model="update.email"
                              type="email"
                              name="email"
                              id="email"
                              class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter Supplier Email"
                            />
                          </div>
                        </div>
                        <div class="pt-3">
                          <label
                            for="address"
                            class="block text-sm font-medium text-gray-700"
                            >Address</label
                          >
                          <div class="relative mt-1 rounded-md shadow-sm">
                            <input
                              v-model="update.address"
                              type="text"
                              name="address"
                              id="address"
                              class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter Supplier Address"
                            />
                          </div>
                        </div>
                        <div class="pt-3">
                          <label
                            for="mobile"
                            class="block text-sm font-medium text-gray-700"
                            >Mobile</label
                          >
                          <div class="relative mt-1 rounded-md shadow-sm">
                            <div
                              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                              <span class="text-gray-500 sm:text-sm">+92</span>
                            </div>
                            <input
                              v-model="update.mobile"
                              type="text"
                              name="mobile"
                              id="mobile"
                              class="block w-full rounded-md border-gray-300 pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="001234567"
                            />
                          </div>
                        </div>
                      </PopupModal>

                      <PopupModal
                        :message="'Are You Sure You Want To Delete'"
                        :show-modal="delOpen"
                      >
                        <template #button>
                          <button
                            @click="toggleDel()"
                            class="text-red-500 hover:text-red-600 rounded-full"
                          >
                            <span class="sr-only">Delete</span>
                            <svg
                              class="w-8 h-8 fill-current"
                              viewBox="0 0 32 32"
                            >
                              <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                              <path
                                d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"
                              />
                            </svg>
                          </button>
                        </template>
                        <template #footer>
                          <button
                            class="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            @click="toggleDel"
                          >
                            Decline
                          </button>
                          <button
                            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            @click="del(supplier.id)"
                          >
                            Accept
                          </button>
                        </template>
                      </PopupModal>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination v-if="willPaginate()" :total-items="suppliersLength()" />
      <!-- Pagination -->
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import PopupModal from "../components/PopupModal.vue";
import CreateNewButton from "../components/CreateNewButton.vue";
import Pagination from "../partials/Pagination.vue";
import { mapGetters, mapActions } from "vuex";
import accountingStore from "../store/accountingStore";
export default {
  data() {
    return {
      createActive: false,
      name: null,
      email: null,
      address: null,
      contact: null,
      delOpen: false,
      updateOpen: false,
      update: {
        id: null,
        name: null,
        email: null,
        address: null,
        mobile: null,
      },
    };
  },
  computed: mapGetters({ getSuppliers: "accounting/getSuppliers" }),
  methods: {
    ...mapActions({
      fetchSuppliers: "accounting/fetchSuppliers",
      deleteSupplier: "accounting/deleteSupplier",
      uploadSupplier: "accounting/uploadNewSupplier",
      updateSupplier: "accounting/updateSupplier",
      deleteSupplier: "accounting/deleteSupplier",
    }),
    willPaginate() {
      return this.suppliersLength() > 10;
    },
    suppliersLength() {
      let suppliers = this.getSuppliers;
      console.log(suppliers);

      // return suppliers.length;
      return 1;
    },
    doUpdate(payload) {
      this.updateSupplier(payload);
      this.toggleUpdate();
    },
    toggleDel() {
      this.delOpen = !this.delOpen;
      return this.delOpen;
    },
    toggleUpdate(id) {
      if (id) {
        let selected = this.getSuppliers.filter((supplier) => {
          return supplier.id == id;
        });
        this.update.id = selected[0].id;
        this.update.name = selected[0].name;
        this.update.email = selected[0].email;
        this.update.mobile = selected[0].mobile;
        this.update.address = selected[0].address;
      }
      this.updateOpen = !this.updateOpen;
      return this.updateOpen;
    },
    del(payload) {
      this.deleteSupplier(payload);
      this.toggleDel();
    },

    storeNewSupplier() {
      this.$store.dispatch("accounting/uploadNewSupplier", {
        name: this.name,
        email: this.email,
        address: this.address,
        mobile: `923${this.contact}`,
      });
      this.createActive = false;
    },

    toggleModal() {
      this.createActive = !this.createActive;
    },
    getClass(val) {
      return [
        val
          ? "border-transparent shadow-sm bg-indigo-500 text-white"
          : "border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500",
        val ? "text-indigo-200" : "text-gray-400",
      ];
    },
    capitalizeString(string) {
      string = String(string);
      const lower = string.toLowerCase();
      return string.charAt(0).toUpperCase() + lower.slice(1);
    },
    generateDateFormat(date) {
      let d = new Date(date);
      return d.toDateString();
    },
  },
  beforeCreate() {
    if (this.$store.getters.getAuthToken === null) {
      this.$router.push("/login");
    }
  },
  created() {
    this.fetchSuppliers();
  },

  components: {
    Dashboard,
    PopupModal,
    CreateNewButton,
    Pagination,
  },
};
</script>

<style></style>
