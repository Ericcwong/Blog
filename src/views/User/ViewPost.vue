<template>
  <div class="container">
    <div class="image">
      <img class="postImage" :src="thumbnail" alt />
      <div class="photos">
        <img
          class="photo"
          v-for="picture in pictures"
          :key="picture.id"
          :src="picture"
          alt=""
        />
      </div>
    </div>
    <div class="postHeader">
      <h3 class="postHeaderTitle">{{ title }}</h3>
    </div>
    <div class="postSubHeader">
      <h4>{{ subtitle }}</h4>
    </div>

    <div class="postDescription">
      <!-- <a :href="link">Link</a> -->
      <pre class="mt-3 mb-4">{{ description }}</pre>
      <!-- <img :src="pictures" alt /> -->
      <b-button class="homeButton">
        <router-link to="/">Back home</router-link>
      </b-button>
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
.container {
  margin-top: 40px;
  height: 100%;
  width: 100vw;
  background: white;
  margin-bottom: 1rem;
}
/* Images */
.image {
  text-align: center;
}
.postImage {
  margin-top: 20px;
  max-width: 100%;
  max-height: 50%;
  width: auto;
  height: auto;
  object-fit: contain;
}
.photos {
  display: flex;
}
.photo {
  width: 50%;
  height: auto;
}
/* Title's centered */
.postHeaderTitle,
.subHeader,
h3,
h4 {
  text-align: center;
}
/* .postHeader {
  display: flex;
  justify-content: space-between;
} */
.postHeaderTitle {
  font-size: 3.5rem;
}
/* Description */
.postDescription {
  margin: 0 auto;
  width: 80%;
  padding-bottom: 1rem;
}
pre {
  font-size: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: white;
}
@media screen and (max-width: 600px) {
  pre {
    font-size: 1.18rem;
  }
}
</style>
