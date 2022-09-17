export default {
  getAuthToken(state) {
    return state.authToken;
  },
  getAuthUser(state) {
    return state.authUserCreds;
  },
  getUsers: (state) => state.customers,
};
