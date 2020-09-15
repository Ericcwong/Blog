import
db
from "../../components/firebase/firebaseInit"


export default {
    state: {
        posts: []
    },

    //Mutations takes whatever action and pushes it to state.
    mutations: {
        //actions.fetchPosts, when the posts are done being pulled in. The data is going to be stored
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        DELETE_POSTS(state, posts) {

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
                    //postArray is to help forEach((response)) once each data is pulled it will be set into one array and that array will be pushed to state.
                    //Instead of having each individual post going to state
                    const postArray = []
                    request.forEach((response) => {
                        //Then the data is set as request, for each request set it as response
                        // each response is set to data
                        const data = {
                            //Firebase's set post ID
                            id: response.id,
                            //User created ID and data is where the information is called from in firebase
                            postId: response.data().postId,
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
        },
        deletePost({
            commit
        }) {
            if (confirm("Are you sure you want to delete this post?")) {
                db.collection("posts")
                    .doc(this.$route.params.title)
                    .delete()
                    .then(function () {
                        console.log("Document Deleted!");
                        this.$router.push("/admin");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }

    },
    //Getters are how you pull information from state.
    getters: {

    },


}