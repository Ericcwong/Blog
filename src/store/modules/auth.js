import {
    reactive,
    toRefs
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
            authState.authenticated = true
            console.log(authState.authenticated)
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
            authState.authenticated = false
            router.push("/")
        }).catch((error) => {
            state.error = error
            console.log(error)
        })
    }
    return {
        ...toRefs(authState),
        login,
        logout
    }
}