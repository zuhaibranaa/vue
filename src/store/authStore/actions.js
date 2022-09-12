export default {
  doLogin(_, payload) {
    this.commit("authToken", payload.token);
    this.commit("authUserCreds", payload.user);
  },
  doLogout() {
    this.commit("authToken", null);
    this.commit("authUserCreds", null);
  },
};
