<template>
  <div>
    <div class="dashboardHeader">
      <h2 class="title">Life Blog</h2>
      <h4>Welcome to my blog</h4>
      <p>
        2020 has been an eventful year with all that has been happening.
        With this blog I hope to log all events that has or have been happening.
        Hope you enjoy my adventures as much as I do!
      </p>
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
  width: 30%;
  margin-bottom: 30px;
  text-align: center;
  margin: 0 auto;
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