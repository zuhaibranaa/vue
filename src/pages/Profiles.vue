<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <!-- Page header -->
    <div class="sm:flex sm:justify-between sm:items-center mb-8">
      <!-- Left: Title -->
      <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">
          Bandwidth Profiles ✨
        </h1>
      </div>

      <!-- Right: Actions -->
      <div
        class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
      >
        <!-- Filter button -->
        <div class="relative inline-flex">
          <button
            class="btn bg-white border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-600"
          >
            <span class="sr-only">Filter</span><wbr />
            <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path
                d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        <!-- Add customer button -->
        <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
          <svg
            class="w-4 h-4 fill-current opacity-50 shrink-0"
            viewBox="0 0 16 16"
          >
            <path
              d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
            />
          </svg>
          <span class="hidden xs:block ml-2">Add Profile</span>
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="px-5 py-4">
        <h2 class="font-semibold text-gray-800">
          All Profiles <span class="text-gray-400 font-medium">4</span>
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
                <th class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Download Rate</div>
                </th>
                <th class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Upload Rate</div>
                </th>
                <th class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="font-semibold">NAS</div>
                </th>
                <th class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Description</div>
                </th>
                <th class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            <!-- Table body -->
            <tbody class="text-sm divide-y divide-gray-200">
              <!-- Row -->
              <tr v-for="item in 10" :key="item">
                <td class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="font-medium text-gray-800">Patricia Semklo</div>
                  </div>
                </td>
                <td class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="text-left">XX Mbps</div>
                </td>
                <td class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="text-left">XX Mbps</div>
                </td>
                <td class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="text-center">24</div>
                </td>
                <td class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap">
                  <div class="text-left font-medium text-light-blue-500">
                    #123567
                  </div>
                </td>
                <td
                  class="px-2 first:pl-3 last:pr-3 py-3 whitespace-nowrap w-px"
                >
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
                  <button class="text-red-500 hover:text-red-600 rounded-full">
                    <span class="sr-only">Delete</span>
                    <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                      <path
                        d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-8">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <nav
          class="mb-4 sm:mb-0 sm:order-1"
          role="navigation"
          aria-label="Navigation"
        >
          <ul class="flex justify-center">
            <li class="ml-3 first:ml-0">
              <a
                class="btn bg-white border-gray-200 text-gray-300 cursor-not-allowed"
                href="#0"
                disabled
                >&lt;- Previous</a
              >
            </li>
            <li class="ml-3 first:ml-0">
              <a
                class="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500"
                href="#0"
                >Next -&gt;</a
              >
            </li>
          </ul>
        </nav>
        <div class="text-sm text-gray-500 text-center sm:text-left">
          Showing <span class="font-medium text-gray-600">1</span> to
          <span class="font-medium text-gray-600">10</span> of
          <span class="font-medium text-gray-600">467</span> results
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";
export default {
  beforeCreate() {
    api
      .get("routeros/profile")
      .then((res) => res)
      .then((response) => {
        console.log(response.data);
      });
  },
};
</script>
