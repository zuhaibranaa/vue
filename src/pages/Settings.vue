<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <!-- Page header -->
    <div class="mb-8">
      <!-- Title -->
      <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">
        Account Settings ✨
      </h1>
    </div>

    <div class="bg-white shadow-lg rounded-sm mb-8">
      <div class="flex flex-col md:flex-row md:-mr-px">
        <!-- Sidebar -->
        <div
          class="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 min-w-60 md:space-y-3"
        >
          <!-- Group 1 -->
          <div>
            <div class="text-xs font-semibold text-gray-400 uppercase mb-3">
              Business settings
            </div>
            <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
              <li class="mr-0.5 md:mr-0 md:mb-0.5">
                <a
                  class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                  :class="settingsPanel === 'account' && 'bg-indigo-50'"
                  href="settings.html"
                >
                  <svg
                    class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2"
                    :class="settingsPanel === 'account' && 'text-indigo-400'"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z"
                    />
                  </svg>
                  <span
                    class="text-sm font-medium text-gray-600"
                    :class="
                      settingsPanel === 'account'
                        ? 'text-indigo-500'
                        : 'hover:text-gray-700'
                    "
                    >My Account</span
                  >
                </a>
              </li>
              <li class="mr-0.5 md:mr-0 md:mb-0.5">
                <a
                  class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                  :class="settingsPanel === 'notifications' && 'bg-indigo-50'"
                  href="notifications.html"
                >
                  <svg
                    class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2"
                    :class="
                      settingsPanel === 'notifications' && 'text-indigo-400'
                    "
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8zM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1z"
                    />
                  </svg>
                  <span
                    class="text-sm font-medium text-gray-600"
                    :class="
                      settingsPanel === 'notifications'
                        ? 'text-indigo-500'
                        : 'hover:text-gray-700'
                    "
                    >My Notifications</span
                  >
                </a>
              </li>
              <li class="mr-0.5 md:mr-0 md:mb-0.5">
                <a
                  class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                  :class="settingsPanel === 'apps' && 'bg-indigo-50'"
                  href="connected-apps.html"
                >
                  <svg
                    class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2"
                    :class="settingsPanel === 'apps' && 'text-indigo-400'"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z"
                    />
                  </svg>
                  <span
                    class="text-sm font-medium text-gray-600"
                    :class="
                      settingsPanel === 'apps'
                        ? 'text-indigo-500'
                        : 'hover:text-gray-700'
                    "
                    >Connected Apps</span
                  >
                </a>
              </li>
              <li class="mr-0.5 md:mr-0 md:mb-0.5">
                <a
                  class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                  :class="settingsPanel === 'plans' && 'bg-indigo-50'"
                  href="plans.html"
                >
                  <svg
                    class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2"
                    :class="settingsPanel === 'plans' && 'text-indigo-400'"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z"
                    />
                  </svg>
                  <span
                    class="text-sm font-medium text-gray-600"
                    :class="
                      settingsPanel === 'plans'
                        ? 'text-indigo-500'
                        : 'hover:text-gray-700'
                    "
                    >Plans</span
                  >
                </a>
              </li>
              <li class="mr-0.5 md:mr-0 md:mb-0.5">
                <a
                  class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                  :class="settingsPanel === 'billing' && 'bg-indigo-50'"
                  href="billing.html"
                >
                  <svg
                    class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2"
                    :class="settingsPanel === 'billing' && 'text-indigo-400'"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15 4c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v3h4zM2 3v1h7V2H3c-.6 0-1 .4-1 1zm12 11V6H2v7c0 .6.4 1 1 1h11zm-3-5h2v2h-2V9z"
                    />
                  </svg>
                  <span
                    class="text-sm font-medium text-gray-600"
                    :class="
                      settingsPanel === 'billing'
                        ? 'text-indigo-500'
                        : 'hover:text-gray-700'
                    "
                    >Billing & Invoices</span
                  >
                </a>
              </li>
            </ul>
          </div>
          <!-- Group 2 -->
          <div>
            <div class="text-xs font-semibold text-gray-400 uppercase mb-3">
              Experience
            </div>
            <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
              <li class="mr-0.5 md:mr-0 md:mb-0.5">
                <a
                  class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                  :class="settingsPanel === 'feedback' && 'bg-indigo-50'"
                  href="feedback.html"
                >
                  <svg
                    class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2"
                    :class="settingsPanel === 'feedback' && 'text-indigo-400'"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.001 3h2v4h-2V3zm1 7a1 1 0 110-2 1 1 0 010 2zM15 16a1 1 0 01-.6-.2L10.667 13H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM2 11h9a1 1 0 01.6.2L14 13V2H2v9z"
                    />
                  </svg>
                  <span
                    class="text-sm font-medium text-gray-600"
                    :class="
                      settingsPanel === 'feedback'
                        ? 'text-indigo-500'
                        : 'hover:text-gray-700'
                    "
                    >Give Feedback</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Panel -->
        <div class="grow">
          <!-- Panel body -->
          <div class="p-6 space-y-6">
            <!-- Plans -->
            <section>
              <div class="mb-8">
                <h2 class="text-2xl text-gray-800 font-bold mb-4">Plans</h2>
                <div class="text-sm">
                  This workspace’s Basic Plan is set to
                  <strong class="font-medium">$34</strong> per month and will
                  renew on <strong class="font-medium">July 9, 2021</strong>.
                </div>
              </div>

              <!-- Pricing -->
              <div x-data="{ annual: true }">
                <!-- Toggle switch -->
                <div class="flex items-center space-x-3 mb-6">
                  <div class="text-sm text-gray-500 font-medium">Monthly</div>
                  <div class="form-switch">
                    <input
                      type="checkbox"
                      id="toggle"
                      class="sr-only"
                      x-model="annual"
                    />
                    <label class="bg-gray-400" for="toggle">
                      <span
                        class="bg-white shadow-sm"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Pay annually</span>
                    </label>
                  </div>
                  <div class="text-sm text-gray-500 font-medium">
                    Annually <span class="text-green-500">(-20%)</span>
                  </div>
                </div>
                <!-- Pricing tabs -->
                <div class="grid grid-cols-12 gap-6">
                  <!-- Tab 1 -->
                  <div
                    class="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200"
                  >
                    <div
                      class="absolute top-0 left-0 right-0 h-0.5 bg-green-500"
                      aria-hidden="true"
                    ></div>
                    <div class="px-5 pt-5 pb-6 border-b border-gray-200">
                      <header class="flex items-center mb-2">
                        <div
                          class="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-3"
                        >
                          <svg
                            class="w-6 h-6 fill-current text-white"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z"
                            />
                          </svg>
                        </div>
                        <h3 class="text-lg text-gray-800 font-semibold">
                          Basic
                        </h3>
                      </header>
                      <div class="text-sm mb-2">
                        Ideal for individuals that need a custom solution with
                        custom tools.
                      </div>
                      <!-- Price -->
                      <div class="text-gray-800 font-bold mb-4">
                        <span class="text-2xl">$</span
                        ><span class="text-3xl" x-text="annual ? '14' : '19'"
                          >14</span
                        ><span class="text-gray-500 font-medium text-sm"
                          >/mo</span
                        >
                      </div>
                      <!-- CTA -->
                      <button
                        class="btn border-gray-200 hover:border-gray-300 text-gray-600 w-full"
                      >
                        Downgrade
                      </button>
                    </div>
                    <div class="px-5 pt-4 pb-5">
                      <div
                        class="text-xs text-gray-800 font-semibold uppercase mb-4"
                      >
                        What's included
                      </div>
                      <!-- List -->
                      <ul>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Quis nostrud exercitation</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Quis nostrud exercitation</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Tab 2 -->
                  <div
                    class="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200"
                  >
                    <div
                      class="absolute top-0 left-0 right-0 h-0.5 bg-light-blue-500"
                      aria-hidden="true"
                    ></div>
                    <div class="px-5 pt-5 pb-6 border-b border-gray-200">
                      <header class="flex items-center mb-2">
                        <div
                          class="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-light-blue-500 to-light-blue-300 mr-3"
                        >
                          <svg
                            class="w-6 h-6 fill-current text-white"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z"
                            />
                          </svg>
                        </div>
                        <h3 class="text-lg text-gray-800 font-semibold">
                          Standard
                        </h3>
                      </header>
                      <div class="text-sm mb-2">
                        Ideal for individuals that need a custom solution with
                        custom tools.
                      </div>
                      <!-- Price -->
                      <div class="text-gray-800 font-bold mb-4">
                        <span class="text-2xl">$</span
                        ><span class="text-3xl" x-text="annual ? '34' : '39'"
                          >34</span
                        ><span class="text-gray-500 font-medium text-sm"
                          >/mo</span
                        >
                      </div>
                      <!-- CTA -->
                      <button
                        class="btn border-gray-200 bg-gray-100 text-gray-400 w-full cursor-not-allowed flex items-center"
                        disabled
                      >
                        <svg
                          class="w-3 h-3 shrink-0 fill-current mr-2"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                          />
                        </svg>
                        <span>Current Plan</span>
                      </button>
                    </div>
                    <div class="px-5 pt-4 pb-5">
                      <div
                        class="text-xs text-gray-800 font-semibold uppercase mb-4"
                      >
                        What's included
                      </div>
                      <!-- List -->
                      <ul>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Quis nostrud exercitation</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Quis nostrud exercitation</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Tab 3 -->
                  <div
                    class="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200"
                  >
                    <div
                      class="absolute top-0 left-0 right-0 h-0.5 bg-indigo-500"
                      aria-hidden="true"
                    ></div>
                    <div class="px-5 pt-5 pb-6 border-b border-gray-200">
                      <header class="flex items-center mb-2">
                        <div
                          class="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3"
                        >
                          <svg
                            class="w-6 h-6 fill-current text-white"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z"
                            />
                          </svg>
                        </div>
                        <h3 class="text-lg text-gray-800 font-semibold">
                          Plus
                        </h3>
                      </header>
                      <div class="text-sm mb-2">
                        Ideal for individuals that need a custom solution with
                        custom tools.
                      </div>
                      <!-- Price -->
                      <div class="text-gray-800 font-bold mb-4">
                        <span class="text-2xl">$</span
                        ><span class="text-3xl" x-text="annual ? '74' : '79'"
                          >74</span
                        ><span class="text-gray-500 font-medium text-sm"
                          >/mo</span
                        >
                      </div>
                      <!-- CTA -->
                      <button
                        class="btn bg-indigo-500 hover:bg-indigo-600 text-white w-full"
                      >
                        Upgrade
                      </button>
                    </div>
                    <div class="px-5 pt-4 pb-5">
                      <div
                        class="text-xs text-gray-800 font-semibold uppercase mb-4"
                      >
                        What's included
                      </div>
                      <!-- List -->
                      <ul>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Quis nostrud exercitation</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Quis nostrud exercitation</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Lorem ipsum dolor sit amet</div>
                        </li>
                        <li class="flex items-center py-1">
                          <svg
                            class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                            />
                          </svg>
                          <div class="text-sm">Quis nostrud exercitation</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Contact Sales -->
            <section>
              <div
                class="px-5 py-3 bg-indigo-50 border border-indigo-100 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center"
              >
                <div class="text-gray-800 font-semibold mb-2 xl:mb-0">
                  Looking for different configurations?
                </div>
                <button
                  class="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                >
                  Contact Sales
                </button>
              </div>
            </section>

            <!-- FAQs -->
            <section>
              <div class="my-8">
                <h2 class="text-2xl text-gray-800 font-bold">FAQs</h2>
              </div>
              <ul class="space-y-5">
                <li>
                  <div class="font-semibold text-gray-800 mb-1">
                    What is the difference between the three versions?
                  </div>
                  <div class="text-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit.
                  </div>
                </li>
                <li>
                  <div class="font-semibold text-gray-800 mb-1">
                    Is there any difference between Basic and Plus licenses?
                  </div>
                  <div class="text-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </li>
                <li>
                  <div class="font-semibold text-gray-800 mb-1">
                    Got more questions?
                  </div>
                  <div class="text-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum in
                    voluptate velit esse cillum dolore eu fugiat
                    <a
                      class="font-medium text-indigo-500 hover:text-indigo-600"
                      href="#0"
                      >contact us</a
                    >.
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <!-- Panel footer -->
          <footer>
            <div class="flex flex-col px-6 py-5 border-t border-gray-200">
              <div class="flex self-end">
                <button
                  class="btn border-gray-200 hover:border-gray-300 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
