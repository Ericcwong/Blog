<template>
  <div class>
    <div class="home">
      <h1>Admin Page</h1>
    </div>
    <div class="container">
      <div class="newPosts">
        <router-link to="/admin/new-post">
          <button class="btn btn-primary">New Post</button>
        </router-link>
      </div>
      <div class="table">
        <table v-for="post of posts" :key="post.id">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>View blog</th>
              <th>Edit blog</th>
              <th>Delete blog</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{post.title}}</td>
              <td>{{post.description}}</td>
              <td>
                <router-link :to="{name: 'view-post', params:{post_id: post.post_id  }}">Blog link</router-link>
              </td>
              <td>
                <button @click="editPost" class="btn btn-primary">Edit Post</button>
              </td>
              <td>
                <button @click="deletePost(post.id)" class="btn btn-danger">Delete Post</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../../components/firebase/firebaseInit";
// import newPost from "../../components/UI/Posts/NewPost";
export default {
  name: "Dashboard",
  //Once created() function has been ran, posts:[] will be reactive
  //The array will be populated
  data() {
    return {
      posts: [],
      post_id: null,
    };
  },
  components: {
    // newPost,
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
            window.location.reload();
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
  color: white;
  background-image: url("/img/UI/coffee.png");
  position: relative;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  height: 200px;
  margin-bottom: 30px;
}
.newPosts {
  margin-bottom: 30px;
}
.container {
  height: 70vh;
}
.dashboardHeader h2 {
  color: white;
}
.newPosts {
  display: flex;
}

.table,
thead,
th,
tbody,
tr,
td {
  border: 1px solid black !important;
  vertical-align: middle !important;
}
table {
  width: 100%;
  table-layout: fixed;
}
/* tr:nth-of-type(odd) {
  background: #eee;
} */

@media only screen and (max-width: 775px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
    border: none;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  td:before {
    /* Now like a table header */
    /* position: absolute; */
    /* Top/left values mimic padding */
    /* left: 6px;
    width: 45%; */
    padding-right: 10px;
    white-space: nowrap;
  }
  td:nth-of-type(1):before {
    content: "Title:";
  }
  td:nth-of-type(2):before {
    content: "Description:";
  }
  td:nth-of-type(3):before {
    content: "View Blog:";
  }
  td:nth-of-type(4):before {
    content: "Edit Blog:";
  }
  td:nth-of-type(5):before {
    content: "Delete Blog:";
  }
}
</style>

