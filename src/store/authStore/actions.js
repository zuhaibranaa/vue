import api from "../../api";

export default {
  doLogin(_, payload) {
    console.log("DoLogin Called");

    this.commit("auth/authToken", payload.token);
    this.commit("auth/authUserCreds", payload.user);
  },
  doLogout() {
    this.commit("auth/authToken", null);
    this.commit("auth/authUserCreds", null);
  },
  async fetchCustomers() {
    let response = await api.get("users/customers");
    if ((response.status = 200)) {
      this.commit("auth/setUsers", response.data);
    }
  },
};
