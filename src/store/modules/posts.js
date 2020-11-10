import
db
from "../../components/firebase/firebaseInit"
import {
    reactive,
    toRefs
} from "@vue/composition-api"
import router from "../../router/index"

export default function usePosts() {
    const state = reactive({
        posts: []
    })

    //Loads all post in the collection posts
    const loadPost = () => {
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
                        pictures: response.data().pictures,
                        link: response.data().link,
                        description: response.data().description,
                    };
                    //Once those are assigned push the data to posts. That is where its pushed to the data() function
                    // this.posts.push(data);
                    postArray.push(data)
                    state.posts = postArray
                })
            })
    }
    //Delete singular post
    const deletePost = (id) => {
        if (confirm("Are you sure you want to DELETE this?")) {
            db.collection("posts")
                .doc(id.id)
                .delete()
                .then(() => {
                    console.log("Document Deleted.");
                    loadPost();
                }).catch((error) => {
                    console.log(error)
                })
        }

    }
    //Edit button redirect but needs functionaltiy to actually edit and update
    const editPost = (id) => {
        console.log(id.id)
        router.push(`admin/edit-post/${id.id}`)
    }
    //View Post button redirect
    const viewPost = (id) => {
        console.log(id.title)
        router.push(`view-post/${id.title}`)
    }
    return {
        state,
        loadPost,
        editPost,
        deletePost,
        viewPost
    }
}