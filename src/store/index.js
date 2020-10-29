import Vue from "vue"
import Vuex from "vuex"
import auth from "./modules/auth"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    //Modules break down each component to their own state, actions, mutations, and getters
    plugins: [createPersistedState()],
    modules: {
        auth
    }
})