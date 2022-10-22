<template>
  <Dashboard>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <!-- Page header -->
      <div class="sm:flex sm:justify-between sm:items-center mb-5">
        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">Areas ✨</h1>
        </div>

        <!-- Right: Actions -->
        <div
          class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
        >
          <!-- Add Areas button -->
          <PopupModal message="Add New Area" :showModal="createAreaActive">
            <template #footer>
              <button
                class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="toggleCreateAreaModal"
              >
                Close
              </button>
              <button
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="storeNewInvoice(update)"
              >
                Save
              </button>
            </template>
            <template #button>
              <CreateNewButton
                :message="'Add New Area'"
                @clickToggle="toggleCreateAreaModal"
              />
            </template>
            <div>
              <div class="pt-3">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    v-model="addNewAreaName"
                    type="text"
                    name="name"
                    v-on:keypress="logData(addNewAreaName)"
                    id="name"
                    class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Area Name"
                  />
                </div>
              </div>
            </div>
          </PopupModal>
          <!-- Add Sub Area button -->
          <PopupModal
            message="Add New Sub Area"
            :showModal="createSubAreaActive"
          >
            <template #footer>
              <button
                class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="toggleCreateSubAreaModal"
              >
                Close
              </button>
              <button
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="storeNewInvoice(update)"
              >
                Save
              </button>
            </template>
            <template #button>
              <CreateNewButton
                :message="'Add New Sub Area'"
                @clickToggle="toggleCreateSubAreaModal"
              />
            </template>
            <div>
              <label
                for="parent"
                class="block text-sm font-medium text-gray-700"
                >Parent Area</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <select
                  id="parent"
                  name="parent"
                  v-model="createSubAreaActive.parent"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option v-for="area in getAreas" :key="area.id">
                    {{ area.name }}
                  </option>
                  <!-- <option v-for="customer in getCustomers" :key="customer.id">
                    {{ customer.email }}
                  </option> -->
                </select>
              </div>
              <div class="pt-3">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    v-model="name"
                    type="text"
                    name="name"
                    id="name"
                    class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Sub Area Name"
                  />
                </div>
              </div>
            </div>
          </PopupModal>
        </div>
      </div>
      <!-- More actions -->
      <div class="sm:flex sm:justify-between sm:items-center mb-5">
        <!-- Left side -->
        <div class="mb-4 sm:mb-0">
          <ul class="flex flex-wrap -m-1">
            <li class="m-1">
              <button
                @click="activate_areas"
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border duration-150 ease-in-out"
                :class="getClass(areasActive)[0]"
              >
                Areas
                <span class="ml-1" :class="getClass(areasActive)[1]">
                  {{ countAreas }}
                </span>
              </button>
            </li>
            <li class="m-1">
              <button
                @click="activate_sub_areas"
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border duration-150 ease-in-out"
                :class="getClass(!areasActive)[0]"
              >
                SubArea
                <span class="ml-1" :class="getClass(!areasActive)[1]">{{
                  getSubAreas.length
                }}</span>
              </button>
            </li>
          </ul>
        </div>

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
          <h2 class="font-semibold text-gray-800">Areas</h2>
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
                  >
                    <div class="flex items-center"></div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">id</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th
                    v-if="!areasActive"
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
                  >
                    <div class="font-semibold text-left">Parent Area</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Actions</div>
                  </th>
                </tr>
              </thead>
              <!-- Table body -->
              <tbody class="text-sm divide-y divide-gray-200">
                <!-- Row -->
                <tr v-for="invoice in temp" :key="invoice">
                  <td
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
                  >
                    <div class="flex items-center"></div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-medium text-orange-300">
                      {{ "#" + invoice.id }}
                    </div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-medium text-green-500">
                      {{ invoice.name }}
                    </div>
                  </td>

                  <td
                    v-if="!areasActive"
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
                  >
                    <div>
                      {{
                        getAreas.filter((area) => {
                          return area.id === invoice.parent;
                        })[0].name
                      }}
                    </div>
                  </td>
                  <td
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
                  >
                    <div class="space-x-1">
                      <button
                        class="text-gray-400 hover:text-gray-500 rounded-full"
                      >
                        <span class="sr-only">Edit</span>
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <path
                            d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z"
                          />
                        </svg>
                      </button>
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
                            @click="del(invoice.id)"
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
      <!-- <Pagination :total-items="temp.length" :start="1" :end="1" /> -->
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import PopupModal from "../components/PopupModal.vue";
import CreateNewButton from "../components/CreateNewButton.vue";
import Pagination from "../partials/Pagination.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      areasActive: true,
      delOpen: false,
      createAreaActive: false,
      createSubAreaActive: false,
      page: 0,
      addNewAreaName: null,
      addNewSubArea: {
        name: null,
        parent: null,
      },
    };
  },
  computed: {
    countAreas() {
      return this.getAreas.length;
    },
    temp() {
      if (this.areasActive) {
        return this.getAreas;
      } else {
        return this.getSubAreas;
      }
    },
    ...mapGetters({
      getAreas: "auth/getAreas",
      getSubAreas: "auth/getSubAreas",
    }),
  },
  watch: {
    createInvoiceToggle() {},
    overdue() {},
  },
  methods: {
    logData(data) {
      console.log(data);
    },
    activate_sub_areas() {
      this.areasActive = false;
    },
    activate_areas() {
      this.areasActive = true;
    },
    toggleDel() {
      this.delOpen = !this.delOpen;
      return this.delOpen;
    },
    ...mapActions({
      fetchAreas: "auth/fetchAreas",
      fetchSubAreas: "auth/fetchSubAreas",
      uploadInvoice: "accounting/createInvoice",
      deleteInvoice: "accounting/deleteInvoice",
      fetchCustomers: "auth/fetchCustomers",
    }),
    del(id) {
      this.deleteInvoice(id);
      this.toggleDel();
    },
    toggleCreateAreaModal() {
      this.createAreaActive = !this.createAreaActive;
    },
    toggleCreateSubAreaModal() {
      this.createSubAreaActive = !this.createSubAreaActive;
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
    statusClass(status) {
      if (status == "paid") {
        return "bg-green-100 text-green-600";
      } else if (status == "pending") {
        return "bg-yellow-100 text-yellow-600";
      } else {
        return "bg-red-100 text-red-600";
      }
    },
  },
  beforeCreate() {
    if (this.$store.getters.getAuthToken === null) {
      this.$router.push("/login");
    }
  },
  created() {
    this.fetchAreas();
    this.fetchSubAreas();
    this.fetchCustomers();
  },

  components: { Dashboard, PopupModal, CreateNewButton, Pagination },
};
</script>

<style></style>
