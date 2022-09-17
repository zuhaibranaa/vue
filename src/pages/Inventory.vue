<template>
  <Dashboard>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <!-- Page header -->
      <div class="sm:flex sm:justify-between sm:items-center mb-5">
        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">
            Inventory ✨
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
              placeholder="Search by Inventory ID…"
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
          <PopupModal message="Add New Inventory" :showModal="createActive">
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
                @click="storeNewInvoice(update)"
              >
                Save
              </button>
            </template>
            <template #button>
              <CreateNewButton
                :message="'Add New Inventory'"
                @clickToggle="toggleModal"
              />
            </template>
            <div>
              <label for="price" class="block text-sm font-medium text-gray-700"
                >Customer</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <select
                  id="currency"
                  name="currency"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>USD</option>
                </select>
              </div>
            </div>
            <div>
              <label
                for="discount"
                class="block text-sm font-medium text-gray-700"
                >Discount</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label for="total" class="block text-sm font-medium text-gray-700"
                >Total</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="number"
                  name="discount"
                  id="total"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label
                for="status"
                class="block text-sm font-medium text-gray-700"
                >Status</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <select
                  id="status"
                  name="currency"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Overdue</option>
                </select>
              </div>
            </div>

            <div>
              <label
                for="status"
                class="block text-sm font-medium text-gray-700"
                >Issue Date</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="date"
                  name="discount"
                  id="total"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label
                for="status"
                class="block text-sm font-medium text-gray-700"
                >Due Date</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="date"
                  name="discount"
                  id="total"
                  class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="0"
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
            Invoices
            <span class="text-gray-400 font-medium">
              {{ getInvoices.all.length }}
            </span>
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
                  >
                    <div class="flex items-center"></div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Invoice</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Customer</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Discount</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Total</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Status</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Issued by</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Issue date</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Due date</div>
                  </th>
                  <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-semibold text-left">Actions</div>
                  </th>
                </tr>
              </thead>
              <!-- Table body -->
              <tbody class="text-sm divide-y divide-gray-200">
                <!-- Row -->
                <tr v-for="invoice in temp" :key="invoice.id">
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
                      {{ invoice.customer.name }}
                    </div>
                  </td>

                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>{{ invoice.discount }}</div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="font-medium text-gray-800">
                      {{ invoice.total_amount }}
                    </div>
                  </td>

                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div
                      class="inline-flex font-medium rounded-full text-center px-2.5 py-0.5"
                      :class="statusClass(invoice.invoice_status)"
                    >
                      {{ capitalizeString(invoice.invoice_status) }}
                    </div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>{{ invoice.generated_by.email }}</div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>{{ generateDateFormat(invoice.created_at) }}</div>
                  </td>
                  <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div class="flex items-center">
                      <div>{{ generateDateFormat(invoice.due_date) }}</div>
                    </div>
                  </td>
                  <td
                    class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
                  >
                    <div class="space-x-1">
                      <button
                        class="text-gray-400 hover:text-gray-500 rounded-full"
                      >
                        <span class="sr-only">View</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 32 32"
                          stroke-width="2"
                          stroke="currentColor"
                          class="w-8 h-8 pt-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
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
                      <button
                        class="text-red-500 hover:text-red-700 rounded-full"
                      >
                        <span class="sr-only">Delete</span>
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                          <path
                            d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"
                          />
                        </svg>
                      </button>
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
      temp: [],
      allActive: true,
      paidActive: false,
      dueActive: false,
      createActive: false,
      overdueActive: false,
      page: 0,
    };
  },
  computed: {
    ...mapGetters({ getInvoices: "accounting/getInvoices" }),
  },
  watch: {
    createInvoiceToggle() {},
    overdue() {},
  },
  methods: {
    ...mapActions({
      fetchInvoices: "accounting/fetchInvoices",
    }),
    showAllInvoices() {
      this.allActive = true;
      this.paidActive = false;
      this.dueActive = false;
      this.overdueActive = false;
      this.temp = this.getInvoices.all;
    },
    showOverdueInvoices() {
      this.allActive = false;
      this.paidActive = false;
      this.dueActive = false;
      this.overdueActive = true;
      this.temp = this.getInvoices.overdue;
    },
    showPaidInvoices() {
      this.allActive = false;
      this.paidActive = true;
      this.dueActive = false;
      this.overdueActive = false;
      this.temp = this.getInvoices.paid;
    },
    showPendingInvoices() {
      this.allActive = false;
      this.paidActive = false;
      this.dueActive = true;
      this.overdueActive = false;
      this.temp = this.getInvoices.pending;
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
  beforeMount() {
    let invoices = this.getInvoices;
    this.temp = invoices.all;
  },
  created() {
    this.fetchInvoices();
  },

  components: { Dashboard, PopupModal, CreateNewButton, Pagination },
};
</script>

<style></style>
