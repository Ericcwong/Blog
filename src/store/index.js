import Vue from "vue"
import Vuex from "vuex"
import auth from "./modules/auth"

Vue.use(Vuex)

export default new Vuex.Store({
    //Modules break down each component to their own state, actions, mutations, and getters
    modules: {
        auth
    }
})