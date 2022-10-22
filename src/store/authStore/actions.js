import { useRouter } from "vue-router";
import api from "../../api";

export default {
  doLogin(_, payload) {
    this.commit("auth/authToken", payload.token);
    this.commit("auth/authUserCreds", payload.user);
  },
  doLogout() {
    this.commit("auth/authToken", null);
    this.commit("auth/authUserCreds", null);
  },
  async fetchCustomers(context) {
    let response = await api.get("users/customers");
    if (response.status == 200) {
      context.commit("setUsers", response.data);
    }
  },
  async fetchAreas(context) {
    let respose = await api.get("users/area");
    if (respose.status == 200) {
      context.commit("setAreas", respose.data);
    }
  },
  async fetchSubAreas(context) {
    let respose = await api.get("users/subarea");
    if (respose.status == 200) {
      context.commit("setSubAreas", respose.data);
    }
  },
};
