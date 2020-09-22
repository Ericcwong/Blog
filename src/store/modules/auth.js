import {
    reactive,
    toRefs
} from "@vue/composition-api";
import {
    auth
} from "../../components/firebase/firebaseInit"
import router from "@/router"
export default function useAuth() {
    const state = reactive({
        authenitcated: false,
        error: null
    })

    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            state.authenitcated = true
            router.push("/admin")
        }).catch((error) => {
            state.error = error
            console.log(error)
        })
        state.authenitcated = true
    }
    const logout = () => {
        auth.signOut().then(() => {
            state.authenitcated = false
            router.push("/")
        }).catch((error) => {
            state.error = error
            console.log(error)
        })
        state.authenitcated = true
    }
    return {
        ...toRefs(state),
        login,
        logout
    }
}