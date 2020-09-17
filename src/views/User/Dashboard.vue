<template>
  <div>
    <div class="dashboardHeader">
      <h2 class="title">Dashboard</h2>
    </div>

    <!-- To clear any confusions
      -- v-for="Post of posts"                    --
      -- posts is coming from computed: ...mapState                --
    -- Post is whats being passed down as props-->
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
import Card from "../../components/UI/cards/Card.vue";
import usePosts from "../../store/modules/posts";
export default {
  name: "Dashboard",
  components: {
    Card,
  },
  //Created() called synchronously after the instance is created.
  //This is ran before that mounted and mounted helps put stuff in the dom
  setup() {
    const { state, loadPost, viewPost } = usePosts();
    loadPost();
    console.log(state);
    return { state, viewPost };
  },
};
</script>

<style scoped>
.dashboardHeader {
  /* background-image: url("/img/UI/coffee.png"); */
  position: relative;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  height: 200px;
  margin-bottom: 30px;
  text-align: center;
}
.title {
  color: white;
  font-size: 3.5rem;
  text-shadow: 2px 2px gray;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media only screen and (max-width: 775px) {
  .cards {
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>