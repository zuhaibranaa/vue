<template>
  <section class="h-screen">
    <div class="px-6 h-full text-gray-800">
      <div
        class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div
          class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
        >
          <img :src="draw2" class="w-full" alt="Sample image" />
        </div>
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form autoComplete="off">
            <div
              class="flex flex-row items-center justify-center lg:justify-start"
            >
              <p class="text-2xl pt-5 mb-0 mr-4">
                Register Yourself
                <br />
                <span class="text-red-300 text-xs">
                  NOTE : This Form Is Only For Customers
                </span>
              </p>
            </div>

            <div
              class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            ></div>

            <div class="mb-6">
              <input
                autoComplete="off"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Name"
              />
              <p class="text-red-500 text-xs italic">{{ nameError }}</p>
            </div>
            <div class="mb-6">
              <input
                autoComplete="off"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Phone Number 
                eg. +923012345678"
              />
              <p class="text-red-500 text-xs italic">{{ phoneError }}</p>
            </div>
            <div class="mb-6">
              <input
                autoComplete="off"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="CNIC"
              />
            </div>
            <div class="mb-6">
              <input
                autoComplete="off"
                type="email"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email Address"
              />
              <p class="text-red-500 text-xs italic">{{ emailError }}</p>
            </div>
            <div class="flex-inline justify-between items-center mb-6">
              <div class="form-group form-check">
                <input
                  autoComplete="off"
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Your Address"
                />
              </div>
            </div>
            <div class="flex-inline justify-between items-center mb-6">
              <div class="form-group form-check">
                <label htmlFor="image">Your Image</label>
                <input
                  type="file"
                  name="image"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Your Current Location"
                />
                <p class="text-red-500 text-xs italic">{{ imageError }}</p>
              </div>
            </div>
            <div class="mb-6">
              <input
                autoComplete="off"
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
              <p class="text-red-500 text-xs italic">{{ passwordError }}</p>
            </div>
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Confirm Password"
              />
              <p class="text-red-500 text-xs italic">{{ passwordError }}</p>
            </div>

            <div class="flex justify-between items-center mb-6">
              <div class="form-group form-check">
                <button
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Register
                </button>
              </div>
              <a
                style="cursor: pointer"
                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
              >
                Forgot password?
                <br />
              </a>
            </div>

            <div class="text-center mb-5 lg:text-left">
              <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                Already have an account?
                <router-link
                  to="/login"
                  style="cursor: pointer"
                  class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Login</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import draw2 from "../images/draw2.webp";
export default {
  data() {
    return {
      draw2,
    };
  },
};
</script>

<style></style>
