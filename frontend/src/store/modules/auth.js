import {
  auth
} from "../../components/firebase/firebaseInit";
import router from "../../router/index";
export default {
  state: {
    user: null,
    authenticated: false,
    error: null,
  },
  //Mutations are what changes the state value
  mutations: {
    UPDATE_USER(state, payload, error) {
      state.user = payload;
      state.authenticated = true;
      state.error = error
      console.log(payload);
    },
    CLEAR_USER(state, payload) {
      state.user = null;
      state.authenticated = false;
      console.log(state.user);
    },
  },
  //Functions to be called through out the application that calls mutations
  actions: {
    loginActions({
      commit
    }, payload) {
      auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          console.log(response.user);
          commit("UPDATE_USER", response.user);
          router.push("/admin");
        }).catch((error) => commit("UPDATE_USER", error));
    },
    logoutActions({
      commit
    }) {
      auth.signOut().then(() => {
        console.log("Signed Out");
        commit("CLEAR_USER");
        // console.log(state.user);
        router.push("/");
      });
    },
  },
  getters: {
    userStatus: state => {
      return state.authenticated
    }
  },
};