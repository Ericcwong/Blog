<template>
  <section class="card">
    <img
      @click="viewPost({ title })"
      class="card-img-top"
      :src="thumbnail"
      alt
    />
    <div class="card-header">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
    </div>
    <div class="card-footer text-muted">
      <b-button variant="primary" v-if="viewPost" @click="viewPost({ title })"
        >View Blog</b-button
      >
      <b-button variant="info" v-if="editPost" @click="editPost({ id })"
        >Edit Post</b-button
      >
      <b-button variant="danger" v-if="deletePost" @click="deletePost({ id })"
        >Delete</b-button
      >
    </div>
  </section>
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
.card {
  display: grid;
  /* grid-auto-columns: 1fr; */
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 1fr 1fr 1fr; */
  gap: 0px 0px;
  width: 25rem;

  grid-template-areas:
    "image"
    "header"
    "footer";
}
.card-header {
  text-align: center;
  grid-area: header;
}
.card-img-top {
  border-bottom: 1px solid lightgray;
  object-fit: contain;
  height: 16rem;
  grid-area: image;
}
.card-subtitle {
  grid-area: subtitle;
}
.card-footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
  grid-area: footer;
}
button {
  /* max-width: 100%; */
}
a {
  text-decoration: none;
  color: white;
}
a:hover,
button:hover {
  text-decoration: none;
  color: black;
}
</style>
