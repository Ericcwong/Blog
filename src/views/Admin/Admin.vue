<template>
  <div class>
    <div class="home">
      <h1>Admin Page</h1>
    </div>
    <div class="container">
      <div class="table">
        <table v-for="post of posts" :key="post.id">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>View blog</th>
            <th>Edit blog</th>
            <th>Delete blog</th>
          </tr>
          <tr>
            <th>{{post.title}}</th>
            <th>{{post.description}}</th>
            <th>
              <router-link :to="{name: 'view-post', params:{post_id: post.post_id  }}">Blog link</router-link>
            </th>
            <th>
              <button @click="editPost" class="btn btn-primary">Edit Post</button>
            </th>
            <th>
              <button @click="deletePost(post.id)" class="btn btn-danger">Delete Post</button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../../components/firebase/firebaseInit";
import Card from "../../components/UI/cards/Card.vue";
export default {
  name: "Dashboard",
  //Once created() function has been ran, posts:[] will be reactive
  //The array will be populated
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Card,
  },
  //Created() called synchronously after the instance is created.
  //This is ran before that mounted and mounted helps put stuff in the dom
  created() {
    //db calls from the set firebase project's collection posts
    db.collection("posts")
      .get()
      //Get that data
      .then((request) => {
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
          console.log(data);
          //Once those are assigned push the data to posts. That is where its pushed to the data() function
          this.posts.push(data);
        });
      });
  },
  methods: {
    deletePost(doc) {
      console.log(doc);
      if (confirm("Are you sure you want to delete this post?")) {
        db.collection("posts")
          .doc(doc)
          .delete()
          .then(function () {
            console.log("Document Deleted!");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    editPost() {},
  },
};
</script>
<style scoped>
.home {
  background-image: url("/img/UI/coffee.png");
  position: relative;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  height: 200px;
  margin-bottom: 30px;
}
.container {
  display: flex;
  height: 70vh;
}
.dashboardHeader h2 {
  color: white;
}
.cards {
  display: flex;
  justify-content: space-evenly;
}
table tr th {
  border: 1px solid black;
}
@media only screen and (max-width: 775px) {
  .cards {
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>

