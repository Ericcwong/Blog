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
          //Once those are assigned push the data to posts. That is where its pushed to the data() function
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
  background-size: cover;
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