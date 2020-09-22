<template>
  <div class>
    <div class="home">
      <h1>Admin Page</h1>
    </div>
    <div class="container">
      <div class="newPosts">
        <router-link to="/admin/new-post">
          <b-button class="btn btn-primary">New Post</b-button>
        </router-link>
      </div>
      <div class="cards">
        <Card
          v-for="post of state.posts"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :subtitle="post.subtitle"
          :thumbnail="post.thumbnail"
          :post_image="post.post_image"
          :link="post.link"
          :description="post.description"
          :deletePost="deletePost"
          :editPost="editPost"
          :viewPost="viewPost"
        />
      </div>
    </div>
  </div>
</template>

<script>
import usePosts from "../../store/modules/posts";
import db from "../../components/firebase/firebaseInit";
import Card from "../../components/UI/cards/Card";
export default {
  name: "Dashboard",
  components: {
    Card,
  },
  //Created() called synchronously after the instance is created.
  //This is ran before that mounted and mounted helps put stuff in the dom
  setup() {
    const { state, loadPost, deletePost, editPost, viewPost } = usePosts();
    loadPost();
    console.log(state);
    return { state, deletePost, editPost, viewPost };
  },
};
</script>
<style scoped>
.home {
  color: black;
  text-align: center;
  /* background-image: url("/img/UI/coffee.png"); */
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
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
@media only screen and (max-width: 775px) {
}
</style>

