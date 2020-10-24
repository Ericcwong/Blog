<template>
  <div class="container">
    <div class="cards">
      <Card
        v-for="post of state.posts"
        :key="post.id"
        :title="post.title"
        :subtitle="post.subtitle"
        :thumbnail="post.thumbnail"
        :post_image="post.post_image"
        :link="post.link"
        :description="post.description"
        :viewPost="viewPost"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/UI/cards/Card";
import usePosts from "../../store/modules/posts";
export default {
  components: {
    Card,
  },
  setup() {
    const { state, loadPost, viewPost } = usePosts();
    loadPost();
    // console.log(state);
    return { state, viewPost };
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
@media only screen and (max-width: 1200px) {
  .cards {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
  .card {
    min-width: 100%;
  }
  .content {
    width: 70%;
  }
}
</style>
