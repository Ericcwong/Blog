import
auth
from "../../components/firebase/firebaseInit"
export default {

    state: {
        email: "",
        password: "",
        user: null
    },
    mutations: {
        SET_USER_LOGIN(state, email, password) {
            state.email = email;
            state.password = password
        }
    },
    actions: {
        userLogin()
    },
    getters: {

    },

}