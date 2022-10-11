import api from "../../api";

export default {
  doLogin(_, payload) {
    console.log("DoLogin Called");

    this.commit("auth/authToken", payload.token);
    this.commit("auth/authUserCreds", payload.user);
    setTimeout(() => {
      localStorage.clear();
    }, 60000 * 1);
  },
  doLogout() {
    this.commit("auth/authToken", null);
    this.commit("auth/authUserCreds", null);
  },
  async fetchCustomers(context) {
    let response = await api.get("users/customers");
    if ((response.status = 200)) {
      context.commit("setUsers", response.data);
    }
  },
};
