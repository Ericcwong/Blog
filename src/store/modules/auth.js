import {
    auth
} from "../../components/firebase/firebaseInit"
export default {
    state: {
        user: null,
        testing: "test",
        error: null
    },
    //Mutations are what changes the state value
    mutations: {
        UPDATE_USER(state, user) {
            state.user = user
        }
    },
    //Functions to be called through out the application that calls mutations
    actions: {
        login({
            commit
        }, email, password) {
            commit("UPDATE_USER", user)
            auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    this.$router.push("/admin")
                })
        },
    },
    getters: {

    }
}