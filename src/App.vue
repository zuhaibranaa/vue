<template>
  <router-view />
</template>

<script>
import "./charts/ChartjsConfig";
export default {
  created() {
    window.onunload = function () {
      this.$store.dispatch("auth/doLogout");
    };
  },
};
</script>
