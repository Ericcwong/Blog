import {
    reactive,
    toRefs
} from "@vue/composition-api";
import {
    auth
} from "../../components/firebase/firebaseInit";
import router from "@/router";

export default function useAuth() {
    const authState = reactive({
        authenticated: false,
        error: null,
    });
    const login = (email, password) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                status()
                authState.authenticated = true;
                console.log(authState.authenticated)
                router.push({
                    name: "admin"
                });
            })
            .catch((error) => {
                authState.error = error;
                console.log(error);
            });
        // authState.authenticated = true
        // console.log(authState.authenticated)
    };
    const logout = () => {
        auth
            .signOut()
            .then(() => {
                // auth.onAuthStateChanged((user) => {
                //   if (user) {
                //     authState.authenticated = false;
                //   }
                // });
                console.log(authState.authenticated)
                router.push("/");
            })
            .catch((error) => {
                state.error = error;
                console.log(error);
            });
    };
    const status = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                authState.authenticated = true;
            } else {
                authState.authenticated = false;
            }
        });
    };
    return {
        ...toRefs(authState),
        authState,
        login,
        logout,
        status,
    };
}