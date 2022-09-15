export default {
  doLogin(_, payload) {
    this.commit("auth.authToken", payload.token);
    this.commit("auth.authUserCreds", payload.user);
  },
  doLogout() {
    this.commit("auth.authToken", null);
    this.commit("auth.authUserCreds", null);
  },
};
