<template>
  <div class="home">
    <h1>Admin Page</h1>
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
    // console.log(state);
    return { state, deletePost, editPost, viewPost };
    const { authState } = useAuth();
    console.log(authState.authenitcated);
  },
};
</script>
<style scoped>
.home {
  color: black;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  height: 10%;
  margin-bottom: 30px;
  height: 100vh;
}
.newPosts {
  margin-bottom: 30px;
}
.container {
  height: 100vh;
  height: 100%;
  width: 100vw;
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
.card {
  width: 25%;
}
@media only screen and (max-width: 1000px) {
  .cards {
    flex-direction: column;
  }
  .card {
    width: 100%;
  }
}
</style>

