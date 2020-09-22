import {
    reactive,
    toRefs,
    watch
} from "@vue/composition-api";
import {
    auth
} from "../../components/firebase/firebaseInit"
import router from "@/router"

export default function useAuth() {
    const authState = reactive({
        authenticated: false,
        error: null
    })
    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            router.push("/admin")
        }).catch((error) => {
            authState.error = error
            console.log(error)
        })
        // authState.authenticated = true
        // console.log(authState.authenticated)
    }
    const logout = () => {
        auth.signOut().then(() => {
            router.push("/")
        }).catch((error) => {
            state.error = error
            console.log(error)
        })
    }
    const status = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                authState.authenticated = true
            } else {
                authState.authenticated = false
            }
        })
    }
    return {
        ...toRefs(authState),
        login,
        logout,
        status
    }
}