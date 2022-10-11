<template>
  <section class="h-screen">
    <div class="container px-6 py-12 h-full">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
          <img :src="draw12" class="w-full" alt="Phone image" />
        </div>
        <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
          <form>
            <div class="mb-6">
              <input
                v-model="email"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
              />
            </div>

            <div class="mb-6">
              <input
                v-model="password"
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <button
              @click.prevent="loginUser"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-half"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign in
            </button>
            <button
              @click.prevent=""
              className="inline-block px-7 mx-3 py-3 text-red-100 bg-red-600 font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-half"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              forgot password?
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import draw12 from "../images/draw12.svg";
import api from "../api";
import axios from "axios";
export default {
  data() {
    return {
      draw12,
      email: null,
      password: null,
    };
  },
  beforeMount() {
    if (this.$store.getters["auth/getAuthToken"])
      this.$router.push("dashboard");
  },
  methods: {
    loginUser() {
      api
        .post("users/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // console.log(response.response.status);
          return response;
        })
        .then((res) => {
          this.$store.dispatch("auth/doLogin", res.data);
          this.$router.push("dashboard");
        })
        .catch((err) => {
          alert("Error " + err.response.status);
        });
      // console.log(
      //   axios.get("https://192.168.88.1/rest/ppp/profile", {
      //     auth: { username: "admin", password: "password" },
      //   })
      // );
    },
  },
};
</script>

<style></style>
