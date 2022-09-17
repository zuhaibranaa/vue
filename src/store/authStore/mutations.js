export default {
  authToken(state, payload) {
    state.authToken = payload;
  },
  authUserCreds(state, payload) {
    state.authUserCreds = payload;
  },
  setUsers(state, payload) {
    state.customers = payload;
  },
};
