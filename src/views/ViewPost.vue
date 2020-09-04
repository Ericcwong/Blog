<template>
  <div class="viewPost">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
import db from "../components/firebase/firebaseInit";
export default {
  name: "viewPost",
  created() {
    this.fetchData();
    console.log(this.fetchData());
  }, //Initially sets all the data to null.//
  //When the user searches to a specific//
  //post, it will pull it from the database//
  data() {
    return {
      post_id: null,
      title: null,
      subtitle: null,
      thumbnail: null,
      post_image: null,
      link: null,
      description: null,
    };
  },

  methods: {
    fetchData() {
      db.collection("posts")
        .where("post_id", "==", this.$route.params.post_id)
        .get()
        .then((response) => {
          response.forEach((res) => {
            this.post_id = res.data().post_id;
            this.title = res.data().title;
            this.subtitle = res.data().subtitle;
            this.thumbnail = res.data().thumbnail;
            this.post_image = res.data().post_image;
            this.link = res.data().link;
            this.description = res.data().description;
          });
        });
    },
  },
};
</script>

<style>
</style>