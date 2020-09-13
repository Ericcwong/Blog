import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import
db
from "../components/firebase/firebaseInit"
// import actions from "./actions"
// import getters from "./getters"
// import mutations from "./mutations"
Vue.use(Vuex)

// const initialState = () => {
//     return {
//         user: null,
//         error: null,

//     };
// };

export default new Vuex.Store({
    state: {
        posts: []
    },

    //Mutations takes whatever action and pushes it to state.
    mutations: {
        //actions.fetchPosts, when the posts are done being pulled in. The data is going to be stored
        SET_POSTS(state, posts) {
            state.posts = posts
        }

    },
    //Actions are methods in a regular vue applications.
    actions: {
        //Fetch Posts
        fetchPosts({
            commit
        }) {
            //db calls from the set firebase project's collection posts
            db.collection("posts")
                .get()
                //Get that data
                .then((request) => {
                    const postArray = []
                    request.forEach((response) => {
                        //Then the data is set as request, for each request set it as response
                        // each response is set to data
                        const data = {
                            //Firebase's set post ID
                            id: response.id,
                            //User created ID and data is where the information is called from in firebase
                            post_id: response.data().post_id,
                            title: response.data().title,
                            subtitle: response.data().subtitle,
                            thumbnail: response.data().thumbnail,
                            post_image: response.data().post_image,
                            link: response.data().link,
                            description: response.data().description,
                        };
                        //Once those are assigned push the data to posts. That is where its pushed to the data() function
                        // this.posts.push(data);
                        postArray.push(data)
                    });
                    commit("SET_POSTS", postArray)
                });
        }

    },
    //Getters are how you pull information from state.
    getters: {

    },



})