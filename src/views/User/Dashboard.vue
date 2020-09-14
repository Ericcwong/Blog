<template>
  <div>
    <div class="dashboardHeader">
      <h2>Dashboard</h2>
    </div>

    <!-- To clear any confusions
      -- v-for="Post of posts"                    --
      -- posts is the data() posts                --
    -- Post is whats being passed down as props-->
    <div class="cards">
      <Card
        v-for="post of posts"
        :key="post.id"
        :title="post.title"
        :subtitle="post.subtitle"
        :thumbnail="post.thumbnail"
        :post_image="post.post_image"
        :link="post.link"
        :description="post.description"
      />
    </div>
  </div>
</template>

<script>
import db from "../../components/firebase/firebaseInit";
import Card from "../../components/UI/cards/Card.vue";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  //Once created() function has been ran, posts:[] will be reactive
  //The array will be populated
  // data() {
  //   return {
  //     posts: [],
  //   };
  // },
  components: {
    Card,
  },
  //Created() called synchronously after the instance is created.
  //This is ran before that mounted and mounted helps put stuff in the dom
  created() {
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    ...mapState({
      posts: (state) => state.Posts.posts,
    }),
  },
};
</script>

<style scoped>
.dashboardHeader {
  background-image: url("/img/UI/coffee.png");
  position: relative;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  height: 200px;
  margin-bottom: 30px;
}
.dashboardHeader h2 {
  color: white;
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