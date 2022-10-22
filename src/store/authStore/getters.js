export default {
  getAuthToken(state) {
    return state.authToken;
  },
  getAuthUser(state) {
    return state.authUserCreds;
  },
  getUsers: (state) => state.customers,
  getAreas: (state) => state.areas,
  getSubAreas: (state) => state.subAreas,
};
