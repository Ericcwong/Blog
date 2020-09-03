// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from "axios"
// // import db from "../components/firebase/firebaseInit"
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     posts: []
//   },
//   mutations: {
//     SET_POSTS(state, posts) {
//       state.posts = posts
//     }
//   },
//   actions: {
//     fetchPosts(context) {
//       db.collection("posts").get().then(
//         querySnapshot => {
//           querySnapshot.forEach(doc => {
//             console.log(doc.data)
//           })
//         }
//       )
//     }
//   },
//   modules: {}
// })