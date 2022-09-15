export default {
  authToken(state, payload) {
    state.auth.authToken = payload;
  },
  authUserCreds(state, payload) {
    state.auth.authUserCreds = payload;
  },
};
