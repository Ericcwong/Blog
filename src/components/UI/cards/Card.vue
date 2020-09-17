<template>
  <section class="card">
    <div class="card-body">
      <div class="card-header">
        <h5 class="card-title">{{title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
      </div>
      <img @click="viewPost({title})" class="card-img-top" :src="thumbnail" alt />
    </div>
    <div class="card-footer text-muted">
      <b-button v-if="viewPost" @click="viewPost({title})">View Blog</b-button>
      <b-button v-if="editPost" @click="editPost({title})">Edit Post</b-button>
      <b-button v-if="deletePost" @click="deletePost({id})">Delete</b-button>
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
  width: 500px;
  border: 1px solid darkgray;
  box-shadow: 3px 3px 2px gray;
  margin: 1.5rem;
}
.card-header {
  text-align: center;
}
.card-img-top {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: 360px;
  /* object-fit: contain; */
  border-bottom: 1px solid lightgray;
}
.card-body {
  padding: 0;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
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