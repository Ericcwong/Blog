<template>
  <div>
    <h3>Dashboard</h3>
    <!-- To clear any confusions
      -- v-for="Post of posts"                    --
      -- posts is the data() posts                --
    -- Post is whats being passed down as props-->
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

<style>
</style>