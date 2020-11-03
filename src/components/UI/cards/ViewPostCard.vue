<template>
  <div class="ViewPost">
    <div class="image">
      <img class="postImage" :src="thumbnail" alt />
      <b-button class="homeButton">
        <router-link to="/">Back home</router-link>
      </b-button>
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    subtitle: String,
    thumbnail: String,
    // post_image: Array,
    link: String,
    description: String,
    postId: Number,
    deletePost: {
      type: Function,
    },
    editPost: {
      type: Function,
    },
    viewPost: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.ViewPost {
  margin-top: 20px;
  background: white;
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
  font-size: 3rem;
}
/* Description */
.postDescription {
  margin: 0 auto;
  width: 80%;
}
pre {
  font-size: 1.25rem;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: white;
}
</style>
