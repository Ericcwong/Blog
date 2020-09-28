<template>
  <div class="container">
    <div class="postHeader">
      <h3>{{title}}</h3>
    </div>
    <div class="postSubHeader">
      <h4>{{subtitle}}</h4>
    </div>
    <div >
      <img class="postImage" :src="thumbnail" alt />
    </div>
    <div class="postDescription">
      <a :href="link">Link</a>
      <p>{{description}}</p>
      <img :src="pictures" alt />
    </div>
  </div>
</template>

<script>
import db from "../../components/firebase/firebaseInit";
export default {
  name: "viewPost",
  //View post is when the user clicks on the the link to the specific post
  //Once before the page loads, created() function is executed, thats when it would run fetchData() function
  created() {
    this.fetchData();
  }, //Initially sets all the data to null.//
  //When the user searches to a specific//
  //post, it will pull it from the database//
  data() {
    return {
      post_id: null,
      title: null,
      subtitle: null,
      thumbnail: null,
      pictures: null,
      link: null,
      description: null,
      date: null,
    };
  },
  mounted() {
    this.dateConvert();
  },
  methods: {
    //fetchData is calling the specific post_id from firebase that is passed when clicked from dashboard page
    fetchData() {
      db.collection("posts")
        .where("title", "==", this.$route.params.title)
        .get()
        .then((response) => {
          response.forEach((res) => {
            this.title = res.data().title;
            this.subtitle = res.data().subtitle;
            this.thumbnail = res.data().thumbnail;
            this.pictures = res.data().pictures;
            this.link = res.data().link;
            this.description = res.data().description;
            this.date = res.data().date;
          });
        });
    },
    dateConvert() {
      this.date = new Date();
      console.log(this.date);
    },
  },
};
</script>

<style scoped>
.postImage {
  max-width: 50%;
  max-height: 50%;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
