export default {
  authToken(state, payload) {
    console.log("authToken Mutation Called");

    state.authToken = payload;
  },
  authUserCreds(state, payload) {
    state.authUserCreds = payload;
  },
};
