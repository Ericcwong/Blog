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
        v-for="Post of posts"
        :key="Post.id"
        :post_id="Post.post_id"
        :title="Post.title"
        :subtitle="Post.subtitle"
        :thumbnail="Post.thumbnail"
        :post_image="Post.post_image"
        :link="Post.link"
        :description="Post.description"
      />
    </div>
  </div>
</template>

<script>
import db from "../components/firebase/firebaseInit";
import Card from "../components/UI/cards/Card.vue";
export default {
  name: "Dashboard",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Card,
  },
  created() {
    db.collection("posts")
      .get()
      .then((request) => {
        request.forEach((response) => {
          console.log(response.data());
          const data = {
            //Firebase's set post ID
            id: response.id,
            //User created ID
            post_id: response.data().post_id,
            title: response.data().title,
            subtitle: response.data().subtitle,
            thumbnail: response.data().thumbnail,
            post_image: response.data().post_image,
            link: response.data().link,
            description: response.data().description,
          };
          this.posts.push(data);
        });
      });
  },
};
</script>

<style scoped>
.dashboardHeader {
  background-image: url("/img/UI/coffee.png");
  position: relative;
  box-sizing: border-box;
  background-position: center;
  height: 200px;
  margin-bottom: 30px;
}
.dashboardHeader h2 {
  color: white;
}
.cards {
  display: flex;
  justify-content: space-evenly;
}

@media only screen and (max-width: 775px) {
  .cards {
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>