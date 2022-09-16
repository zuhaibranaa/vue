export default {
  authToken(state, payload) {
    console.log("authToken Mutation Called");

    state.authToken = payload;
  },
  authUserCreds(state, payload) {
    state.authUserCreds = payload;
  },
  setUsers(state, payload) {
    state.customers = payload;
  },
};
